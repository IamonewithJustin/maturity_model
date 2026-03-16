param(
  [int]$Port = 8765,
  [int]$MaxPortTries = 20
)

$ErrorActionPreference = "Stop"

function Get-ContentType {
  param([string]$Path)

  $extension = [System.IO.Path]::GetExtension($Path).ToLowerInvariant()
  switch ($extension) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "application/javascript; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    ".svg" { "image/svg+xml" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".gif" { "image/gif" }
    ".webp" { "image/webp" }
    ".ico" { "image/x-icon" }
    ".txt" { "text/plain; charset=utf-8" }
    default { "application/octet-stream" }
  }
}

function Test-HttpEndpoint {
  param([int]$PortToCheck)

  try {
    $response = Invoke-WebRequest -Uri ("http://127.0.0.1:{0}/" -f $PortToCheck) -Method Head -TimeoutSec 2
    return ($response.StatusCode -ge 200 -and $response.StatusCode -lt 500)
  } catch {
    return $false
  }
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$root = [System.IO.Path]::GetFullPath((Join-Path $scriptDir ".."))
$listener = $null
$startedPort = $null

for ($candidate = $Port; $candidate -lt ($Port + $MaxPortTries); $candidate++) {
  $candidateUrl = "http://127.0.0.1:$candidate/"
  $testListener = New-Object System.Net.HttpListener
  $testListener.Prefixes.Add($candidateUrl)

  try {
    $testListener.Start()
    $listener = $testListener
    $startedPort = $candidate
    break
  } catch {
    $testListener.Close()

    if ((Test-HttpEndpoint -PortToCheck $candidate)) {
      Write-Host ""
      Write-Host "App appears to already be running at:" -ForegroundColor Yellow
      Write-Host "  $candidateUrl" -ForegroundColor Cyan
      Write-Host ""
      Start-Process $candidateUrl | Out-Null
      exit 0
    }
  }
}

if (-not $listener) {
  Write-Host ""
  Write-Host ("Could not start server on ports {0}-{1}." -f $Port, ($Port + $MaxPortTries - 1)) -ForegroundColor Red
  Write-Host "Close other local servers and try again, or increase MaxPortTries." -ForegroundColor Yellow
  Write-Host ""
  throw "No available port found."
}

$baseUrl = "http://127.0.0.1:$startedPort/"

Write-Host ""
Write-Host "Culture Mindset Maturity Explorer is running:" -ForegroundColor Green
Write-Host "  $baseUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C in this window to stop the server."
Write-Host ""

Start-Process $baseUrl | Out-Null

while ($listener.IsListening) {
  try {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $requestedPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($requestedPath)) {
      $requestedPath = "index.html"
    }

    $fullPath = [System.IO.Path]::GetFullPath((Join-Path $root $requestedPath))
    if (-not $fullPath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
      $response.StatusCode = 403
      $response.Close()
      continue
    }

    if (-not (Test-Path -LiteralPath $fullPath -PathType Leaf)) {
      $response.StatusCode = 404
      $notFound = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $response.ContentType = "text/plain; charset=utf-8"
      $response.ContentLength64 = $notFound.Length
      $response.OutputStream.Write($notFound, 0, $notFound.Length)
      $response.Close()
      continue
    }

    $bytes = [System.IO.File]::ReadAllBytes($fullPath)
    $response.StatusCode = 200
    $response.ContentType = Get-ContentType -Path $fullPath
    $response.ContentLength64 = $bytes.Length
    $response.OutputStream.Write($bytes, 0, $bytes.Length)
    $response.Close()
  } catch [System.Net.HttpListenerException] {
    break
  } catch {
    Write-Host "Server error: $($_.Exception.Message)" -ForegroundColor Red
  }
}

$listener.Close()

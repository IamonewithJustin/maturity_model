@echo off
setlocal
set SCRIPT_DIR=%~dp0
set SERVER_SCRIPT=%SCRIPT_DIR%scripts\serve.ps1

if not exist "%SERVER_SCRIPT%" (
  echo Could not find server script:
  echo %SERVER_SCRIPT%
  pause
  exit /b 1
)

powershell -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%SERVER_SCRIPT%" -Port 8765
if errorlevel 1 (
  echo.
  echo Launcher failed. Please share this window's error text.
  pause
)

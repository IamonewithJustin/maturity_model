# Culture Mindset Maturity Explorer

Static interactive tool built from `maturity model.pptx`.

## Open It (No Terminal Needed)

### Option 1: Double-click launcher (Windows)

1. Double-click `Launch App.bat`
2. Your browser opens automatically at [http://127.0.0.1:8765](http://127.0.0.1:8765)
3. Keep the server window open while using the app

This uses PowerShell (built into Windows) and does not require Python.
If `8765` is busy, it now automatically uses the next available local port.

### Option 2: Share as a URL (recommended for end users)

This repo now includes a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`.
After GitHub Pages is enabled for this repo, users can open:

[https://iamonewithjustin.github.io/maturity_model/](https://iamonewithjustin.github.io/maturity_model/)

No install and no local setup needed.

## What It Includes

- Clickable mindset selector
- Phase slider and phase step navigation
- `Do / Don't` behavior guidance for the three detailed mindset slides
- A comparison view for any phase across the model
- The original maturity wheel diagram from slide 1

## Source Notes

- `Own the Outcome` is represented as the center of the model, consistent with the original deck.
- The detailed `Do / Don't` content comes from the three dedicated mindset slides:
  - `Strive for Clarity`
  - `Deliver through Innovation`
  - `Build Trust and Resilience`

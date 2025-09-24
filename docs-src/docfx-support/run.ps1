param(
    [string]$DocfxCommand = "docfx",
    [string[]]$DocfxArgs = @("metadata")
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$scriptRoot = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
$docsSrc = Resolve-Path (Join-Path $scriptRoot "..")
$repoRoot = Resolve-Path (Join-Path $docsSrc ".." "..")
$frameworkRoot = Join-Path $repoRoot "oqtane.framework"
if (-not (Test-Path $frameworkRoot)) {
    throw "Expected oqtane.framework sibling folder at '$frameworkRoot'."
}

$stubSource = Join-Path $scriptRoot "stubs" "RadzenTextEditor.placeholder.cs"
if (-not (Test-Path $stubSource)) {
    throw "Stub source '$stubSource' not found."
}

$stubDestination = Join-Path $frameworkRoot "Oqtane.Client" "Modules" "Controls" "TextEditors" "Radzen" "RadzenTextEditor.DocfxStub.cs"
$hadExistingStub = Test-Path $stubDestination

try {
    Copy-Item -Path $stubSource -Destination $stubDestination -Force

    Push-Location $docsSrc
    try {
        & $DocfxCommand @DocfxArgs
        if ($LASTEXITCODE -ne 0) {
            throw "docfx exited with code $LASTEXITCODE"
        }
    }
    finally {
        Pop-Location
    }
}
finally {
    if (-not $hadExistingStub -and (Test-Path $stubDestination)) {
        Remove-Item $stubDestination -Force
    }
}
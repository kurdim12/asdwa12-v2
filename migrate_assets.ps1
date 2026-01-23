$ErrorActionPreference = "Stop"

$WebsiteRoot = "public"
$ImagesRoot = "$WebsiteRoot\images"
$ProjectsRoot = "$ImagesRoot\projects"
$HeroRoot = "$ImagesRoot\hero"

$Source1 = "..\Catalog and web site\Brochures_2017 by main office"
$Source2 = "..\كتالوج الشركة\PHOTOS"
$Source3 = "..\كتالوج الشركة"

# Create Directories
if (!(Test-Path $ProjectsRoot)) { New-Item -ItemType Directory -Force -Path $ProjectsRoot | Out-Null }
if (!(Test-Path $HeroRoot)) { New-Item -ItemType Directory -Force -Path $HeroRoot | Out-Null }

function Copy-ProjectImages($SourcePath, $DestName) {
    $DestPath = "$ProjectsRoot\$DestName"
    if (Test-Path $SourcePath) {
        Write-Host "Copying $DestName..." -ForegroundColor Cyan
        if (!(Test-Path $DestPath)) { New-Item -ItemType Directory -Force -Path $DestPath | Out-Null }
        Copy-Item "$SourcePath\*" -Destination $DestPath -Recurse -Force
    } else {
        Write-Host "Warning: Source not found for $DestName at $SourcePath" -ForegroundColor Yellow
    }
}

# Source 1
Copy-ProjectImages -SourcePath "$Source1\AL WHDAHA DAM" -DestName "AL WHDAHA DAM"
Copy-ProjectImages -SourcePath "$Source1\AQABA THERMAL POWER STATION" -DestName "AQABA THERMAL POWER STATION"
Copy-ProjectImages -SourcePath "$Source1\Amman Dev. Corridor" -DestName "Amman Development Corridor"
Copy-ProjectImages -SourcePath "$Source1\Aqaba Entrance" -DestName "Aqaba Entrance"
Copy-ProjectImages -SourcePath "$Source1\Dissi Pipe line" -DestName "Dissi Pipeline"
Copy-ProjectImages -SourcePath "$Source1\Ayla" -DestName "Ayla"
Copy-ProjectImages -SourcePath "$Source1\Dead sea Panorama" -DestName "Dead Sea Panorama"

# Source 2
Copy-ProjectImages -SourcePath "$Source2\PARK WAY" -DestName "Park Way"
Copy-ProjectImages -SourcePath "$Source2\QUDS SWIEMEH ROAD" -DestName "Quds Swiemeh Road"

# General Assets
Write-Host "Copying General Assets..." -ForegroundColor Cyan
Copy-Item "$Source3\Logo High.jpg" -Destination "$ImagesRoot\logo.jpg" -Force
Copy-Item "$Source3\25 years old.jpg" -Destination "$ImagesRoot\anniversary.jpg" -Force

Copy-Item "$Source3\Add_Shot_02+.jpg" -Destination "$HeroRoot\1.jpg" -Force
Copy-Item "$Source3\Add_Shot_03.jpg" -Destination "$HeroRoot\2.jpg" -Force
Copy-Item "$Source3\BBR cover.jpg" -Destination "$HeroRoot\3.jpg" -Force

Write-Host "Migration Complete!" -ForegroundColor Green

@echo off
chcp 65001
setlocal enabledelayedexpansion

set "WebsiteRoot=public"
set "ImagesRoot=%WebsiteRoot%\images"
set "ProjectsRoot=%ImagesRoot%\projects"
set "HeroRoot=%ImagesRoot%\hero"

set "Source1=..\Catalog and web site\Brochures_2017 by main office"
set "Source2=..\كتالوج الشركة\PHOTOS"
set "Source3=..\كتالوج الشركة"

if not exist "%ProjectsRoot%" mkdir "%ProjectsRoot%"
if not exist "%HeroRoot%" mkdir "%HeroRoot%"

echo Copying AL WHDAHA DAM...
xcopy /E /I /Y "%Source1%\AL WHDAHA DAM" "%ProjectsRoot%\AL WHDAHA DAM"

echo Copying AQABA THERMAL POWER STATION...
xcopy /E /I /Y "%Source1%\AQABA THERMAL POWER STATION" "%ProjectsRoot%\AQABA THERMAL POWER STATION"

echo Copying Amman Dev. Corridor...
xcopy /E /I /Y "%Source1%\Amman Dev. Corridor" "%ProjectsRoot%\Amman Development Corridor"

echo Copying Aqaba Entrance...
xcopy /E /I /Y "%Source1%\Aqaba Entrance" "%ProjectsRoot%\Aqaba Entrance"

echo Copying Dissi Pipe line...
xcopy /E /I /Y "%Source1%\Dissi Pipe line" "%ProjectsRoot%\Dissi Pipeline"

echo Copying Ayla...
xcopy /E /I /Y "%Source1%\Ayla" "%ProjectsRoot%\Ayla"

echo Copying Dead sea Panorama...
xcopy /E /I /Y "%Source1%\Dead sea Panorama" "%ProjectsRoot%\Dead Sea Panorama"

echo Copying PARK WAY...
xcopy /E /I /Y "%Source2%\PARK WAY" "%ProjectsRoot%\Park Way"

echo Copying QUDS SWIEMEH ROAD...
xcopy /E /I /Y "%Source2%\QUDS SWIEMEH ROAD" "%ProjectsRoot%\Quds Swiemeh Road"

echo Copying General Assets...
copy /Y "%Source3%\Logo High.jpg" "%ImagesRoot%\logo.jpg"
copy /Y "%Source3%\25 years old.jpg" "%ImagesRoot%\anniversary.jpg"

copy /Y "%Source3%\Add_Shot_02+.jpg" "%HeroRoot%\1.jpg"
copy /Y "%Source3%\Add_Shot_03.jpg" "%HeroRoot%\2.jpg"
copy /Y "%Source3%\BBR cover.jpg" "%HeroRoot%\3.jpg"

echo Migration Complete!

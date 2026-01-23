@echo off
chcp 65001
setlocal enabledelayedexpansion

set "WebsiteRoot=public"
set "ImagesRoot=%WebsiteRoot%\images"
set "DocsRoot=%WebsiteRoot%\documents"
set "VideosRoot=%WebsiteRoot%\videos"
set "CertsRoot=%ImagesRoot%\certificates"

set "SourceCerts=..\كتالوج الشركة\Cerificates"
set "SourceDocs=..\كتالوج الشركة"
set "SourceVideos=..\Catalog and web site"

if not exist "%CertsRoot%" mkdir "%CertsRoot%"
if not exist "%DocsRoot%" mkdir "%DocsRoot%"
if not exist "%VideosRoot%" mkdir "%VideosRoot%"

echo Copying Certificates...
xcopy /Y "%SourceCerts%\*.jpg" "%CertsRoot%\"

echo Copying Company Profile PDF...
copy /Y "%SourceDocs%\Company Profile.pdf" "%DocsRoot%\company_profile.pdf"

echo Copying Project Videos...
copy /Y "%SourceVideos%\Ibn Hammad Project R2.mp4" "%VideosRoot%\project_video_1.mp4"
copy /Y "%SourceVideos%\Ibn Hammad Project R4.mp4" "%VideosRoot%\project_video_2.mp4"

echo Migration Complete!

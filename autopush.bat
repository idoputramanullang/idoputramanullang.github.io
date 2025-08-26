@echo off
set MESSAGE=%1
if "%MESSAGE%"=="" set MESSAGE=Update otomatis

git add -A
git commit -m "%MESSAGE%"
git push origin main
pause

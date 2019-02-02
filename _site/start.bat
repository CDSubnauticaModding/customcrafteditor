echo off
title CustomCraftEditor Server
cls

cd /D %~dp0>nul
bundle exec jekyll serve
pause>nul
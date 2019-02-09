echo off
title CustomCraftEditor SERVER2
cls

cd /D %~dp0>nul
bundle exec jekyll serve
pause>nul
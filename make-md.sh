#!/bin/sh

cd ./src/markdown-pages/
touch $1.md

echo 'The file named as ' $1.md 'is created'

TODAY=`date '+%F'`
echo $TODAY

echo '---' >> $1.md
echo 'path: "/article/'$1'"' >> $1.md
echo 'date: "'`date '+%F'`'"' >> $1.md
echo '---' >> $1.md

echo $1.md 'is created completely'
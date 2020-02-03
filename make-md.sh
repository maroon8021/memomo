#!/bin/sh

cd ./src/markdown-pages/

# https://linuxfan.info/post-1739
if [[ -e $1.md ]]; then #同名ファイルが存在する場合
  echo 'The file name "'$1'" already exists'
  echo 'Please use other name for md title'
  exit

elif [ $# = 0 ]; then #引数チェック https://hacknote.jp/archives/33122/
  echo 'No file name(an argument)'
  echo 'Please set one argument as md title'
  exit
fi

touch $1.md

echo 'The file named as ' $1.md 'is created'

TODAY=`date '+%F'`
echo $TODAY

echo '---' >> $1.md
echo 'path: "/article/'$1'"' >> $1.md
echo 'date: "'`date '+%F'`'"' >> $1.md
echo 'title: ""' >> $1.md
echo '---' >> $1.md

echo $1.md 'is created completely'
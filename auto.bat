cd dist
move .\\_assets\\* .
rmdir /Q _assets
copy index.html 404.html

git init
git add -A
git commit -m deploy
git push -f git@github.com:drelf2018/night.nana7mi.link.git master:gh-pages
cd ..

git add -A
git commit -m %1
git push git@github.com:drelf2018/night.nana7mi.link.git main
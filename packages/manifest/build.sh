mkdir -p dist
mkdir -p dist/popup

cp ../content-script/dist/content.js dist/content.js
cp -r ../popup/dist/** dist/popup

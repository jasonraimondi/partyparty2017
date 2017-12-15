default: init

init:
	if [ ! -e config/firebase.js ]; then cp config/firebase.sample.js config/firebase.js; fi
	make install

deploy:
	npm install
	rm -rf dist
	npm run build
	firebase deploy

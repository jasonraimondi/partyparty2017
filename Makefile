default: init

init:
	if [ -e config/firebase.js ]; then cp config/firebase.sample.js config/firebase.js; fi
	make install

build:
	npm run build

install:
	npm install

deploy: install build
	firebase deploy

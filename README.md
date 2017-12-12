[![Build Status](https://ci.jasonraimondi.com/api/badges/jason/ngx-starter/status.svg)](https://ci.jasonraimondi.com/jason/ngx-starter)

# PartyParty2017

[https://holiday-party-2017.firebaseapp.com\](https://holiday-party-2017.firebaseapp.com\)

### Installation:

```bash
git clone ssh://git@bitbucket.ef.network:7999/jason/partyparty2017.git
cd partyparty2017
make init
# now you need to ask @jraimondi or @sberard for the firebase config
# firebase project name is "holiday-party-2017"
npm run serve
```


### Deploying to Firebase

```
npm i -g firebase-tools
firebase login
firebase use holiday-party-2017

# this will show you the information required for the config/firebase.js file
# note: you only need the object {} of config settings, not firebase.initializeApp()
firebase setup:web

make deploy
```

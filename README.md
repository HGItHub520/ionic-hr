# ssc_app

ssc_app is an mobile app aiming at serving CSAIR staffs on their HR related jobs. 
It's built on Ionic2 and TypeScript. 
ssc_app is willing to be the prototype of the hera_app (short for Human Resource & Enterprise Assets group) .

## pre requirements
* nodejs
* visual studio code

the setup files are available [here](ftp://10.92.3.109/soft/)

## steps to setup your environment
```
$ npm install cnpm -g
$ cnpm install -g json-server ionic cordova
$ git config --global user.name 'your_name'
$ git config --global user.email 'you@example.com'

$ cd /your/project/dir
$ git clone http://github.cheau.io/yourname/ssc_app.git
$ git remote add origin http://github.cheau.io/hr/ssc_app.git
$ git remote add upstream http://github.cheau.io/yourname/ssc_app.git
$ git fetch upstream

$ cnpm install
$ code .

$ git checkout master
$ git merge upstream/master
$ git push -u origin master

```
#!/bin/bash
testBaseDir=${HOME}/tmp
destDir=${testBaseDir}/test-react-app
cwd=`pwd`
echo Executing kickoff -a .kickoff.test.yml -f . -d destDir
rm $destDir -rf
kickoff -a .kickoff.test.yml -f . -d $destDir
cd $destDir
echo $destDir
pwd
./.kickoff.sh
npm install && npm run build
echo "Start a web server (such as http-server) in the dist folder listening on the right port"
echo "then open the app in a browser to test"
# npm run test
# npm run lint
cd $cwd

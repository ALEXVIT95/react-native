export NODE_ENV=development && npm install;
fuser -k 8000/tcp;
rm -rf ./report/* && npx start-server-and-test start http://localhost:8000 nightwatch;
mv ./report/* ./report/unit.xml;
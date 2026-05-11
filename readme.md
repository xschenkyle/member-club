curl -X GET http://localhost:8080/club-api/members

Backend Java application build
cd badminton-membership-system\backend
mvn eclipse:eclipse
mvn clean install
mvn clean jetty:run


-Install node.js
Goto web site download latest nodes : https://nodejs.org/en/download
once install nodes

-Check Node version
node -v

-Check node.js version
npm -v

-Install Angular CLI Globally
npm install -g @angular/cli
ng version (you should see Angulor logo)

-Create a new Angular working space
ng new frontend --routing --style css --ssr false

-Copy or check-out src code into current Angulor workspace

- Install dependency
npm install

- finally start server
ng serve --port 4201


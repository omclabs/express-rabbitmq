# README #

Express JS to RabbitMQ 

### What is this repository for? ###

* a REST API using ExpressJS to create a message in Rabbit MQ
* Listener for processing the message in Rabbit MQ

### How do I get set up? ###

*** NODE JS
* Install NodeJS dan NPM https://nodejs.org/en/
* Clone this Repo
* Run npm install
* copy `.env.example` -> `.env`
* copy `.env.example` -> `.env.testing`
* Adjust .env to your environment
* type `npm start` to run the web server
* type `npm run test` to run unit testing
* type `npm run consumer` to run listener

*** RabbitMQ
* Install RabbitMQ, simply using docker image https://hub.docker.com/_/rabbitmq

*** CURL
* curl --location --request POST 'localhost:3000/api/v1/post-to-rabbit' \
--header 'Content-Type: application/json' \
--data-raw '{
	  "message": "Hello from here"
}'

### Who do I talk to? ###

* omclabs@gmail.com


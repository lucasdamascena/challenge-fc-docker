## Instructions

## Challenge 1: Publishing a Go Image on Docker Hub

Create a Docker image that, when executed with the command:

```sh
docker run lucasdamascena/fullcycle
```

- I make sure the image prints the message: "Full Cycle Rocks!!";
- I use official Go images from Docker Hub;
- The final image is less than 2MB.

## Challenge 2: Nginx and Node.js Integration

In this challenge, I set up a system using Nginx as a reverse proxy to interact with a Node.js application. The process involves:

Configuring Nginx to receive user requests and forward them to the Node.js application.
The Node.js application adds a record to a MySQL database, inserting a name into the people table.
The Node.js application responds to Nginx with:

```html
<h1>Full Cycle Rocks!</h1> 
```
along with a list of names from the database.

- I use docker-compose to configure the setup.
- Running docker-compose up -d starts all services and makes them available on port 8080.
- I include a volume for the Node.js application for development purposes.

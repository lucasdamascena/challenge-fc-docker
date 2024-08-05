## docker-compose.yaml

This docker-compose.yml file sets up a development environment with three services:

Database (db):
- Image: lucasdamascena/mysql
- Context: ./mysql
- Volumes: The database uses the ./mysql directory (referred to as mysql_shared in the container) for data persistence. Note that mysql_shared is arbitrary and can be replaced with any name, as MySQL does not allow sharing data in the default folder. The image includes an internal script that sets up a table in the database.

Node.js Application (node):
- Image: lucasdamascena/node
- Context: ./node
- Dockerfile: Dockerfile.prod
- Volumes: Mounts the ./node directory for the Node.js application.
- Dependency: The application waits for the database to start before starting up, managed by dockerize.

Nginx Server (nginx):
- Image: lucasdamascena/nginx
- Context: ./nginx
- Dockerfile: Dockerfile
- Ports: Maps port 80 of the container to port 8080 on the host.
- Dependency: Waits for the Node.js application to start before starting up.

All services are connected to the nodenet network, configured with the bridge driver, allowing communication between containers.
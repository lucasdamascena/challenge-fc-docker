## Dockerfile.prod

This Dockerfile builds a Go application and creates a lightweight Docker image.

```Dockerfile
# Build Stage
FROM golang:latest AS builder
WORKDIR /usr/src/app
COPY . .
RUN go mod init main 
RUN go build -o main

# Run Stage
FROM scratch
COPY --from=builder /usr/src/app/main /main
CMD ["/main"]
```

##### Build Stage:
- Uses the latest Go image;
- Sets the working directory to "/usr/src/app";
- Copies the project files into the container;
- Initializes a Go module and builds the application.

##### Run Stage:
- Uses a minimal scratch image for the final container;
- Copies the compiled application from the builder stage;
- Sets the command to run the application.

This results in a small and efficient Docker image suitable for running the Go application.
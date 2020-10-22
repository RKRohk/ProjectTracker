# The Yellow Brick Road | MERN Starter

## Overview

This is an opinionated repo to set up a development and production environment for a MERN stack project with docker

It includes:

- Hot reloading Express and React apps

- Some opinionated middleware for express to speed up development

- Caching for node_modules

## File Structure

```none
project_name
    |
    |---/client
        |
        |--/public
        |--/src
        |
        .dockerignore
        Dockerfile-dev
        Dockerfile
        package.json
        README.md
        yarn.lock
    |
    |---/server
        |
        |---/src
            |
            |--/utils
            app.js
            index.js
            mongo.js
        .dockerignore
        Dockerfile-dev
        Dockerfile
        package.json
        yarn.lock
    |
    |
    .env
    .gitignore
    docker-dev-compose.yaml
    docker-test-compose.yaml
    docker-compose.yaml
    README.md



```

# Fully Dockerized Full Stack Application with CI CD Pipelines

## The idea behind this application is to create a starter template for all future projects where all the basic DEVOPS concepts will be implemented from the get go when I copy this code there

### This application will have the following features in coronological order of development: -

- A barebones nodeJS server with 3 API endpoints.
    - Will have 3 Unit Test for the 3 API endpoints.

- A barebones SPA react application which has 3 DIVs on the home page that have buttons for calling the 3 APIs and logging the result of those API calls.
    - Will have unit tests for React components using JEST.

- Setting up an nginx reverse proxy web server using docker compose.
    - This webserver's domain.com/api end point will point to the appserver ( NodeJS application built above ) and the domain.com/ end point will point to the frontend react SPA.

- Dockerizing of the above 2 apps with a Dockerfile of their own which will be then referenced in the docker-compose.yml file created in the ^ step.

- Setting up the config in such a way the both the frontend and backend applications are accesible on their ports and are only accesible through the 80 or 443 ports of the nginx reverse proxy server.

- Setting up an automation shell script to create SSL for local development and running the same script as part of the docker-compose nginx service spin up.
    - The script will check if there are any existing certs or not and if there are none, then create them and add the created CA to the macOS keychain.

- Creating a .env file and a environment_spinup.sh shell script that will account for the environment set in the .env file ( local | staging ) and run appropriate commands for the environment.
    - Difference between local and staging: -
        - docker-compose.yml file will be different for both the environments.
        - SSL setup shell scripts will be different.
        - nginx conf files will be different for both the environments.

- Setting up CI CD pipelines using GitHub actions.

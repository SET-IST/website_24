# Infrastructure

## VM

The website is hosted in one VM on [OpenStack](https://vmcloud.tecnico.ulisboa.pt)

To login into the VM you can use ssh `ssh ubuntu@set.vps.tecnico.ulisboa.pt`

_The server is running __fail2ban__, if you can't login, ask someone to verify that your key is correctly placed on the server_

# Deployment

## Nginx

- Nginx is configured on `/etc/nginx/sites-enabled/default`
- It serves the production and staging versions of the website
- It will redirect any http requests to https
- Any request without a host will be redirected to the production version

## Docker
There are 3 docker-composes on the machine:
- `/opt/docker-compose.yml` - Database, S3, Redis
- `/opt/prod/docker-compose.yml` - Production Website
- `/opt/main/docker-compose.yml` - Staging Website

_Database, S3 and Redis containers are shared between the production and staging websites_

## Production
The production website is served on [set.tecnico.ulisboa.pt](https://set.tecnico.ulisboa.pt)

## Staging
The staging website is served on [server.set.tp.vps.tecnico.ulisboa.pt](https://server.set.tp.vps.tecnico.ulisboa.pt)

The staging IPv4 is local to the IST network, you might not be able to access it without a VPN

_IPv6 is public, if you have IPv6 you won't need the VPN_


# CI/CD
There are pipelines on the repo that will make sure that the deployments are as simple as possible.

The pipelines are configured on `.github/workflows`

There are 2 kinds of pipelines configured:
- `deploy-XXX.yml` - Deploy the website to the XXX environment
- `build.yml` - Build the docker image just to verify it compiles

### `deploy-XXX.yml` pipelines

In the first stage `build`
- An `.env` file will be generated with the secrets set on the repo
- Save `.env` as an artifact
- Build the docker image
- Push it to docker hub

In the second stage `deploy`:
- Fetch the ssh private key from the secrets
- Download the `.env` from the artifacts
- Copy the `.env` to the server
- Run the `deploy-XXXX.sh` script on the server

### `build.yml` pipeline
In the stage `build`:
- Build the docker image

## Deploy scripts
The deploy script will:
- move the `env` to the correct folder
- execute docker login
- pull the new image
- restart the docker-compose using the new image

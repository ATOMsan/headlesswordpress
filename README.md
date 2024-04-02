## Install

The build process takes on average 5 minutes!

_Prerequisite:_ Before you begin, you need [Docker](https://www.docker.com) installed. On Linux, you might need to install [docker-compose](https://docs.docker.com/compose/install/#install-compose) separately.

Docker Compose builds and starts four containers by default: `db-headless`, `wp-headless`, `frontend`:

    docker-compose up -d

**Wait a few minutes** for Docker to build the services for the first time. After the initial build, startup should only take a few seconds.

Stops containers and removes containers, networks, volumes, and images created by (docker-compose up):

    docker-compose down

You can follow the Docker output to see build progress and logs:

    docker-compose logs -f

Alternatively, you can use some useful Docker tools like Kitematic and/or VSCode Docker plugin to follow logs, start / stop / remove containers and images.

_Optional:_ you can run the frontend locally while WordPress still runs on Docker:

    docker-compose up -d wp-headless
    cd frontend && npm i && npm start

Once the containers are running, you can visit the React frontends and backend WordPress admin in your browser.

## Frontend

This starter kit provides two frontend containers:

- `frontend` container powered by the WP REST API is server-side rendered using Next.js, and exposed on port `3000`: [http://localhost:3000](http://localhost:3000)

Here's what the frontend looks like:

You can follow the `npm start` output by running docker-compose `logs` command followed by the container name. For example:

    docker-compose logs -f frontend

If you need to restart that process, restart the container:

    docker-compose restart frontend

**PS:** Browsing the Next.js frontend in development mode is relatively slow due to the fact that pages are being built on demand. In a production environment, there would be a significant improvement in page load.

## Backend

The `wp-headless` container exposes Apache on host port `8080`:

- Dashboard: [http://localhost:8080/wp-admin](http://localhost:8080/wp-admin) (default credentials `admin`/`admin`)
- REST API: [http://localhost:8080/wp-json](http://localhost:8080/wp-json)

Apache/PHP logs are available via `docker-compose logs -f wp-headless`.

If you have deployed your WordPress install and are having CORS issues be sure to update `/wordpress/wp-content/themes/headlesstheme/inc/frontend-origin.php` with your frontend origin URL.

---

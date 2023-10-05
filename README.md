<img src="https://github.com/andrew-novak/task-diary/raw/main/client/src/components/private/MainPage/Navigation/components/logo.svg" alt="Task Diary web app logo" width="128" height="128">

# task-diary

[Demo](https://andrewnovak.co.uk/demos/task-diary)

A web app developed as my first attempt at creating a web API.

The project assists registered users in gaining more control over their lives by providing tools to track and plan daily activities.

The server-side, crafted with Express, stores user data within a MongoDB database.

The user interface has been developed using React and Material-UI, ensuring a clean and modern design.

## How to run it in development:

1. Clone the project `git clone https://github.com/andrew-novak/task-diary cloned-task-diary`, where `cloned-task-diary` represents the name of the destination directory where the repository will be cloned.

2. Navigate to the project root directory `cd ./cloned-task-diary`.

3. Run `npm run install:both`

4. Duplicate the `example.env` file and rename the duplicate as `.env`. Feel free to modify any environment variables in the newly created `.env` file that do not meet your requirements.

5. Run `npm run dev` to start both the API and client in development mode.

## How to run it in production:

Note that the following instructions do not include configuring standalone web servers like Nginx, Apache, etc.

1. Clone the project `git clone https://github.com/andrew-novak/task-diary cloned-task-diary`, where `cloned-task-diary` represents the name of the destination directory where the repository will be cloned.

2. Navigate to the project root directory `cd ./cloned-task-diary`.

3. Run `npm run install:both`

### Client:

4. Navigate to `client` subdirectory using the command `cd ./client`.

5. To set the homepage, use the command `json -I -f package.json -e "this.homepage=\"<YourHomepageHere>\""`. If the website is located in the root location, you can set it as the current directory with `json -I -f package.json -e "this.homepage=\".\""`. For websites in sublocations, specify the full URL like `json -I -f package.json -e "this.homepage=\"https://example.com/apps/task-diary\""`.

6. Build with this react environment variable, e.g.:
   `REACT_APP_API_URL="https://example.com/api" npm run build`.

7. After the previously ran build command, you can rename and move the resulting `client/build` directory to a desired location (e.g., somewhere in `/usr/share/nginx`).

### API:

8. Set variables on your server based on `example.env` with your own production variables, e.g., in the default `~/.bashrc` or your custom `~/.bashrc.d` directory.

9. Navigate to a directory outside the project's root directory.

10. Rename and move the whole project root directory to a desired location, e.g. `mv ./cloned-task-diary ~/apis/task-diary-api`

11. Start the API using PM2: `NODE_ENV=production pm2 start YOUR_API_DIRECTORY/server.js --name YOUR_PM2_APP_NAME`, e.g. `NODE_ENV=production pm2 start ./task-diary-api/server.js --name task-diary-api`

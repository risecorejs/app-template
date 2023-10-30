# @risecorejs/app-template

This project represents a template for an application based on Express.js. It provides a basic structure and configurations for quickly starting web application development.

## Project Structure

The project has the following structure:

```
📂 app-template
│
│   📂 config
│   │   ├── index.js
│   │   ├── app.js
│   │   ├── server.js
│   │   └── database.js
│   │
│   📂 modules
│       └── 📂 <module_name>
│           ├── <module_name>.service.js
│           ├── <module_name>.controller.js
│           │
│           ├── 📂 models
│           │   └── <model_name>.js
│           │
│           ├── 📂 migrations
│           │   ├── 0001_29102023_create_table_<table_name>.js
│           │   ├── 0002_29102023_add_column_<table_name>.js
│           │   └── 0003_29102023_rename_column_<table_name>.js
│           │
│           └──📂 middleware
│               ├── <middleware_name>.middleware.js
│               ├── <middleware_name>.middleware.js
│               └── <middleware_name>.middleware.js
│
├── .dockerignore
├── .env.example
├── .gitignore
├── .prettierrc.json
├── app.js
├── Dockerfile
├── middleware.js
├── package.json
├── package-lock.json
├── README.md
├── shared-services.js
└── start.js
```

## Running the Project

Before you start using this template, make sure you have Node.js and npm installed. Follow these steps:

1. Clone the repository or create a new project using this template.
2. Create a `.env` file based on `.env.example` and provide the necessary environment variables.
3. Install dependencies by running: `npm install`
4. Install additional global packages:

```bash
npm install -g pm2@latest
npm install -g @risecorejs/app-cli
npm install -g nodemon
```

5. Start the application using:

```bash
npm run dev
npm run start
```

After these steps, your application should be accessible at the specified host and port.

## Customization

You can customize the application, add new modules, and extend its functionality according to your needs. It is recommended to explore the documentation for Express.js and other libraries used in the project for more advanced configuration.

## Docker Image

This project includes a Dockerfile that allows you to containerize your Express.js application using the `node:16.7.0-alpine` image. Dockerizing your application makes it easy to deploy and run in various environments.

### Building the Docker Image

Follow these steps to build the Docker image for your application:

1. Make sure you have Docker installed on your system. If you haven't installed Docker, you can download and install it from [Docker's official website](https://www.docker.com/get-started).

2. Open a terminal and navigate to the root directory of your project where the `Dockerfile` is located.

3. Run the following command to build the Docker image:

```bash
docker build -t <your_image_name> .
```

### Running the Docker Container

Once you have built the Docker image, you can run a Docker container with your Express.js application using the following command:

```bash
docker run -d -p 5000:5000 <your_image_name>
```

Your Express.js application should now be accessible within the Docker container, and you can access it through your host machine's port.

Feel free to customize the Dockerfile and container settings as per your project's requirements. Docker provides a powerful way to package and deploy your application consistently across different environments.

## Questions and Feedback

If you have questions or suggestions for improving this template, feel free to reach out to us.

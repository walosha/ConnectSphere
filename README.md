# ConnectSphere

ConnectSphere is a professional social media platform designed to facilitate networking and collaboration among professionals. It allows users to connect with each other, follow updates from connections, and view official announcements from administrators.

## Features

- **User Connections**: Connect with other professionals to expand your network and stay updated on their activities.

- **Follow Updates**: Follow other users to receive updates on their posts and activities in your feed.

- **Admin Posts**: Stay informed with official announcements and posts from administrators.

## Technologies Used

### Frontend
- **TypeScript**: Strongly typed language for enhanced development experience.
- **React**: Powerful frontend library for building interactive user interfaces.
- **Vite**: Fast and lightweight frontend build tool for modern web development.
- **Styled Components**: CSS-in-JS library for styling React components.
- **Cypress**: End-to-end testing framework for frontend applications.

### Backend
- **Node.js**: JavaScript runtime for building scalable backend applications.
- **Express.js**: Minimalistic web framework for Node.js for building APIs.
- **tRPC**: TypeScript RPC framework for building type-safe APIs.
- **Vitest**: Testing framework for backend applications.
- **Turborepo**: Monorepo tool for managing multiple packages in a single repository.

### Deployment and CI/CD
- **Render**: Cloud platform for deploying and scaling web applications.
- **GitHub Actions**: CI/CD platform for automating software workflows.

## Getting Started

## ⌨ Scripts

| command                      | description                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `pnpm start`                 | Runs the production build of the server (`/server`)                                             |
| `pnpm pm2:start`             | Runs the server production build as a background process, using pm2 (`/server`)                 |
| `pnpm pm2:delete`            | Deletes all pm2 processes (`/server`)                                                           |
| `pnpm pm2:logs`              | Shows logs for pm2 (`/server`)                                                                  |
| `pnpm dev`                   | Launches apps and bundles all packages in watch mode                                            |
| `pnpm lint`                  | Performs an eslint check through all workspaces                                                 |
| `pnpm lint:fix`              | Performs an eslint fix through all workspaces                                                   |
| `pnpm ts:check`              | Performs a TypeScript check through all workspaces                                              |
| `pnpm ts:references`         | Syncs TypeScript references in all `tsconfig.json` files + updates `nodemon.json` `watch` array |
| `pnpm stylelint`             | Performs an stylelint check through all workspaces                                              |
| `pnpm check`                 | Performs eslint, TypeScript, and stylelint checks through all workspaces                        |
| `pnpm build`                 | Builds all apps                                                                                 |
| `pnpm build:lib`             | Bundles all packages                                                                            |
| `pnpm test:unit`             | Runs unit tests in watch mode                                                                   |
| `pnpm test:unit:run`         | Runs unit tests once                                                                            |
| `pnpm test:integration`      | Runs integration tests in watch mode                                                            |
| `pnpm test:integration:run`  | Runs integration tests once                                                                     |
| `pnpm test:e2e`              | Runs e2e tests in watch mode                                                                    |
| `pnpm test:e2e:run`          | Runs e2e tests once                                                                             |
| `pnpm test:coverage`         | Generates test coverage reports                                                                 |
| `pnpm test:coverage:preview` | Generates test coverage reports and opens preview                                               |
| `pnpm cypress`               | Opens the Cypress UI (`/web`)                                                                   |
| `pnpm cypress:install`       | Installs the Cypress (`/web`)                                                                   |
| `pnpm postinstall`           | Ensures that local or CI environment is ready after installing packages                         |

## 🔒 Envs

Envs are validated with the package `envalid`. Check out `.env-example` & `.env.test-example` files

If the `pnpm dev` script is executed without the required environment variables, the application will output similar details in the console:

```js
================================
Missing environment variables:
PORT: Port the Express server is running on (eg. "3001"). See https://expressjs.com/en/starter/hello-world.html
================================
```

## 🌐 Ports

-  🌐 :3000 - Web
-  🖥️ :3001 - Server

## Contributing

Contributions are welcome! If you'd like to contribute to ConnectSphere, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
[![ConnectSphere](https://img.shields.io/badge/ConnectSphere-%2344CC66.svg?style=for-the-badge&logo=connectsphere&logoColor=white)](#)

# Owlix Frontend Documentation

## Introduction

This comprehensive documentation serves as a guide to understanding the intricacies, functionalities, and methodologies employed throughout the project's development lifecycle.

Within these pages, you will find detailed insights into the project's architecture, design principles, implementation strategies, and usage instructions. Whether you are a developer seeking to contribute to the project, a stakeholder looking to understand its inner workings, or a curious individual interested in exploring its capabilities, this documentation is crafted to cater to your needs.

## Core Technlogies Used

Project leverages the following technologies and libraries:

- **React.js**: A popular JavaScript library for building user interfaces, known for its component-based architecture and declarative programming approach.

- **TypeScript**: A superset of JavaScript that adds static typing capabilities to the language, enhancing code quality, maintainability, and developer productivity.

- **Redux Toolkit**: A comprehensive library for managing application state in React.js applications. Redux Toolkit simplifies the process of state management by providing utilities such as createSlice and createAsyncThunk, along with built-in support for immutable updates and middleware integration.

- **Vite**: A blazing-fast build tool that enhances the development experience by providing instant server start and lightning-fast hot module replacement (HMR). Vite serves as the foundation for our project, enabling efficient development workflows and rapid iteration.

## Getting Started:

Before proceeding, ensure you have the following prerequisites installed on your system:

- Node.js (v20.11.0 or later), can be found [here](https://nodejs.org/en);
- npm (Node Package Manager) or yarn;
- code editor (VSCode recommended);
- prettier configured with your code editor, can be found [here](https://prettier.io/);

At the very beginning, go to the folder where the project is located. Open a terminal and run the following command to install npm modules:

```bash
  npm install
```

or:

```bash
  yarn install
```

To run project in development mode use:

```bash
  npm run dev
```

For the application to be fully functional, a local version of the backend must be launched. Instructions for starting it can be found [here](https://todo).

## Folder structures

The folder structure plays a crucial role in organizing project assets, source code, and configuration files in a logical manner. It enhances collaboration among team members, facilitates code reuse, and streamlines the development process. This documentation aims to provide an overview of each directory's purpose and the rationale behind our chosen organization scheme. The folder structure adheres to best practices and industry standards for React projects.

📁 project-root
├──📁 .storybook - contain all importrant configuration files for storybook components documentation;
│-----├──📄main.ts
│-----└──📄preview.ts
├──📁 cypress - contain all configuration files for integration, components and e2e tests;
│-----├──📁 e2e - place where all e2e tests are writen;
│-----├──📁 fixtures - folder for mocks used in e2e tests;
│-----├──📁 screenshots - folder where essentials pictures are taken during the tests;
│-----├──📁 support - folder where all configuration files for cypress test are located;
│-----│-----├──📄commands.ts
│-----│-----├──📄component-index.html
│-----│-----├──📄components.ts
│-----│-----└──📄e2e.ts
│-----└──📄tsconfig.json - separated configuration for typescript recommended by cypress documentation;
├──📁 node_modules - all node modules installed;
│ 📄main.ts
├──📄preview.ts
📁 public - contains static files that are served as-is to the client without processing. This includes the main HTML file, favicon, and other assets like images and fonts;
├──📁 locales - folder to store all languages translation used in application used by i18next library. There are examples of folders and translation files ;
│-----├──📁 pl
│-----│-----└──📄translation.json
│-----└──📁 en
│-----│-----└──📄translation.json
├──📄 index.html
├──📄 favicon.ico
├──📄 manifest.json - configuration manifest required by progresive web app ;
├──📄 robots.txt
├──📁 src
│-----├──📁 app
│-----│-----├──📁 {domain-context-name-for-separated-logic-of-app}-context
│-----│-----│-----├──📁 ** fixtures** folder for mocks used all test for this context;
│-----│-----│-----├──📁 components - contain all the components related to this context;
│-----│-----│-----│-----├──📁 {name-of-component}
│-----│-----│-----│-----│-----├──📄 {name-of-component}.tsx - view of component
│-----│-----│-----│-----│-----├──📄 {name-of-component}.cy.js - test file
│-----│-----│-----│-----│-----└──📄 use{name-of-component}.tsx - logic related strict to component
│-----│-----│-----├──📁 domain
│-----│-----│-----│-----├──📄 {domain-context-name-for-separated-logic-of-app}-context.tsx - typescript types and interfaces, all the logic stricted related to the domain, framework free code;
│-----│-----│-----│-----└──📄 {domain-context-name-for-separated-logic-of-app}-context.test.js - tests related to clean domain code;
│-----│-----│-----├──📁 services - i could be store, api or others;
│-----│-----│-----│-----├──📄 {service-name}.ts
│-----│-----│-----│-----└──📄 {service-name}.mapper.ts - if there is an api mapper can be used to transform responses etc.;
│-----│-----│-----└──📁 tests
│-----├──📁 common - place where all the domain/context free staff are located;
│-----│-----├──📁 assets
│-----│-----│-----├──📁 image
│-----│-----│-----│-----├──📁 raster
│-----│-----│-----│-----└──📁 vector
│-----│-----│-----├──📁 video
│-----│-----│-----└──📄 index.ts - here we import and export all the assets with certain names;
│-----│-----├──📁 components - isolated from domains, clean, reusable, logic free, design system components;
│-----│-----│-----└──📁 {name-of-component}
│-----│-----│-----│-----├──📄 {name-of-component}.cy.tsx - test file;
│-----│-----│-----│-----├──📄 {name-of-component}.stories.ts - storybook component configuration;
│-----│-----│-----│-----├──📄 {name-of-component}.style.scss - component styles;
│-----│-----│-----│-----├──📄 {name-of-component}.tsx - view of component;
│-----│-----│-----│-----└──📄 {name-of-component}.types.ts - interfaces, types etc;
│-----│-----├──📁 config - contain configuration files for used libraries (redux, i18next etc);
│-----│-----├──📁 hooks - domain free reusable hooks;
│-----│-----├──📁 services - domain api services, stores etc;
│-----│-----├──📁 styles - global styles
│-----│-----└──📁 utils - other miscellaneous code that is not related to any other location;
│-----├──📁 poc
│-----├──📄 App.tsx - entry point for application;
│-----└──📄 main.txt - entry point for application;
├──📄 … (other configuration files tha must be placed inside root of project folder)

## Code Writing Guidelines

At the onset of our project, we established stringent guidelines to maintain code quality, readability, and robustness. These guidelines encompass various tools and practices aimed at ensuring consistency and reliability throughout our codebase.

### Code Linting and Analysis:

**ESLint** : We employ ESLint to enforce coding standards and detect potential errors or deviations from best practices in our JavaScript and TypeScript code.

**Prettier** : Prettier is a must-use tool for code formatting. It ensures consistent code style across the project, enhancing readability and minimizing stylistic inconsistencies.

**SonarJS** : SonarJS is utilized for static code analysis, offering deeper insights into code quality, security vulnerabilities, and maintainability.

**ESLint React Hooks** : This ESLint plugin specifically focuses on enforcing rules related to React Hooks, ensuring adherence to recommended patterns and avoiding common pitfalls.

**Unicorn** : Unicorn extends ESLint with additional rules for enforcing coding conventions and preventing anti-patterns in JavaScript code.

### Local Testing:

**Cypress and Jest**: Our testing strategy encompasses multiple layers. We utilize Cypress for end-to-end (E2E) and integration testing to simulate user interactions and validate application behavior across different scenarios. Additionally, Jest is employed for unit testing testing to verify the functionality of individual chunks of code and their interactions.
**Pre-Commit Checks - Command Utilization**: Before committing any changes, we run a pre-commit hook to execute ESLint, Prettier, and all tests. This ensures that our code adheres to coding standards, consistent formatting, and passes all tests (unit, integration, and E2E) before being integrated into the codebase.To streamline our development workflow and ensure adherence to coding standards, we have integrated the following command:

```bash
  npm run can-i-commit
```

This custom command serves as a pre-commit check, invoking ESLint, Prettier, and running all tests before allowing the code to be committed. It acts as a gatekeeper, preventing the introduction of code that violates established guidelines or fails to meet quality standards.
By adhering to these guidelines and leveraging the aforementioned tools and practices, we strive to maintain a high level of code quality, reliability, and maintainability throughout our project. Consistent adherence to these standards fosters collaboration, facilitates code reviews, and ultimately enhances the overall stability and performance of our application.

## CI/CD, Deployment and Hosting

In our project, the frontend is served from AWS (Amazon Web Services), where we host both our testing([here](https://todo/)) and production([here](https://todo/)) environments. This setup allows us to maintain separate environments for development, testing, and production, ensuring smooth and controlled deployment processes.

We leverage AWS services to host our frontend application, providing scalability, reliability, and robust infrastructure. With AWS, we can easily deploy and manage our application while benefiting from features such as auto-scaling, load balancing, and security enhancements.

We maintain dedicated testing environments([here](https://todo/)) alongside our production environment([here](https://todo/)) within AWS. These environments are designed to mimic the production environment closely, allowing us to validate changes, test new features, and identify issues in a controlled setting before deploying to production.

Our deployment process is facilitated by a CI/CD (Continuous Integration/Continuous Deployment) pipeline, which automates the deployment workflow and ensures consistency and reliability in our release cycles.

Within our CI/CD pipeline, we have incorporated a testing pipeline that runs various types of tests:

**Unit Tests**: These tests focus on validating individual units or components of our codebase in isolation. They ensure that each unit behaves as expected and meets its specification.

**Integration Tests**: Integration tests validate the interactions between different components or modules within our application. They verify that these components work together harmoniously and integrate seamlessly.

**End-to-End (E2E) Tests**: E2E tests simulate real user scenarios by interacting with our application as a whole. They validate the functionality of the entire system, including user interfaces, workflows, and integrations with external services.

We host **Storybook**, a tool for developing UI components in isolation, on a static hosting service within AWS. This allows us to showcase and document our UI components independently of the main application, facilitating collaboration among team members and providing a centralized repository for UI development. It can be found [here](https://todo/);

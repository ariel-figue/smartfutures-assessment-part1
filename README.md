# Smart Futures Assessment - React.js & TypeScript

This project is a code exercise submission for the Senior Software Developer position at Smart Futures, located at 6401 Penn Ave, Suite 300, Pittsburgh, PA 15206 (412.288.3900, info@smartfutures.org). It demonstrates proficiency in React.js, TypeScript, and GraphQL as per the assessment requirements.

The application consists of two main components for Part 1:
1. **UserCard**: A reusable component displaying user information with a toggleable email feature and loading state.
2. **UserList**: A component fetching and displaying a paginated list of users via GraphQL, with search functionality.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and enhanced with TypeScript, Apollo Client, and additional libraries.

## Features

### Part 1: Code Exercise

#### Task 1: Reusable UserCard Component
- **Type Safety**: Written in TypeScript with a defined `User` interface.
- **Functionality**: Displays user name, profile picture, and a toggleable email field via a "Toggle Details" button.
- **Styling**: Uses Tailwind-inspired CSS classes for a clean, responsive design.
- **Bonus**: Includes a skeleton loader with a 1.5-second forced loading state for UX demonstration.

#### Task 2: UserList with GraphQL
- **Data Fetching**: Uses Apollo Client to query a mock GraphQL API (simulated via `mock-server.ts`).
- **Type Safety**: Maps GraphQL responses to the `User` type.
- **UI**: Renders a list of `UserCard` components in a responsive grid.
- **Requirements**: Handles loading and error states with skeletons and error messages.
- **Bonus**: Implements infinite scroll pagination and a debounced search input filtering users by name.

#### Additional Notes
- A mock GraphQL server is provided via `@apollo/server` and `@graphql-tools/mock` for local development.
- The app assumes a GraphQL endpoint at `http://localhost:4000/graphql` (configurable in `src/services/apollo-client.ts`).

### Part 2: Code Review & Optimization

#### Task 3: Refactor and Improve Code
You are given an existing React component that contains multiple issues. Your task is to:
- Identify at least three problems in the code.
- Refactor the code to follow best practices.
- Explain your changes briefly.

This part of the assessment evaluates your ability to recognize and fix inefficiencies, improve code readability, and enhance maintainability.

## Prerequisites

- **Node.js**: Version 16.x or later
- **npm**: Version 8.x or later

## Installation

1. Clone the repository or unzip the project archive.
2. Navigate to the project directory:
   ```bash
   cd smartfutures-assessment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm run sf-demo` (Recommended)
Runs both the mock server and the React app concurrently using `concurrently`.

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page auto-reloads on code changes, and lint errors appear in the console.

### `npm run mock-server`
Starts the mock GraphQL server at [http://localhost:4000/graphql](http://localhost:4000/graphql).

### `npm run build`
Builds the app for production into the `build` folder, optimized and minified with hashed filenames.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**Irreversible**: Exposes all configuration files (Webpack, Babel, etc.) for full control. Use with caution.

## Project Architecture

```
smartfutures-assessment/
├── public/                          # Static assets (e.g., logo.svg)
├── src/                             # Source code
│   ├── components/                  # Reusable React components
│   │   ├── Part1/                   # Components for Task 1 & 2
│   │   │   ├── UserCard/            # Displays user info with toggle
│   │   │   │   └── UserCard.tsx
│   │   │   ├── UserList/            # Fetches and displays user list
│   │   │   │   └── UserList.tsx
│   │   │   └── LoadingSkeleton.tsx  # Skeleton loader for UX
│   │   ├── Part2/                   # Additional components (e.g., Counter)
│   │   │    ├── Counter.tsx
│   │   └── CollapsibleSections.tsx  # CollapsibleSections component for separating each part of assessmet
│   ├── server/                      # Mock GraphQL server setup
│   │   └── mock-server.ts           # Simulates GraphQL API
│   ├── services/                    # API and external service integrations
│   │   └── apollo-client.ts         # Apollo Client configuration
│   ├── types/                       # TypeScript type definitions
│   │   └── index.ts                 # User and GraphQL response types
│   ├── App.tsx                      # Main app component
│   ├── App.test.tsx                 # Tests for App component
│   ├── index.tsx                    # Entry point for React
│   ├── index.css                    # Global styles
│   └── setupTests.ts                # Test setup configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # Project documentation
```

### Data Flow Diagram

```
+-------------------+         +-------------------+         +------------------+
|   UserList.tsx    |  --->   |   Apollo Client   |  --->   |  Mock GraphQL    |
| (Fetches users,   |         | (Queries users)   |         |  Server (mock-   |
|  renders cards)   |         +-------------------+         |  server.ts)      |
+-------------------+                     ^                  +------------------+
           |                              |                           ^
           v                              |                           |
+-------------------+                     |                           |
|   UserCard.tsx    |  <------------------+                           |
| (Displays user    |                                                 |
|  info, toggles)   |  <----------------------------------------------+
+-------------------+        (User data mapped to User type)
```

## Submission Details

- **Git Repository**: [Insert URL if applicable]
- **Zip Upload**: [Insert link if applicable]
- **.gitignore**: Excludes `node_modules`, `build`, and other generated files.

## Assessment Context

This project fulfills Parts 1 and 2 of the Smart Futures assessment.

For questions, contact Smart Futures at info@smartfutures.org.


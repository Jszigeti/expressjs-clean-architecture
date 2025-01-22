# Express.js Clean Architecture

This project is an example of a clean architecture implementation using
Express.js and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Jszigeti/expressjs-clean-architecture.git
   ```

2. Navigate to the project directory:

   ```sh
   cd expressjs-clean-architecture
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Create .env file: The application uses environment variables defined in the
   `.env` file. Make sure to set the necessary variables before running the
   application.

   Here is an example of the `.env` file configuration:

   ```sh
    NODE_ENV=development
    PORT=3000
   ```

### Running the Application

To start the application in development mode, run:

```sh
npm run dev
```

The server will start on the port specified in the .env file.

### Project Structure

- `src/` Contains the source code
  - `infrastructure/`
    - `api/` API related files
      - `api.config.ts` Configuration for the API
      - `index.ts` Entry point for the API

### Scripts

- `dev`: Starts the application in development mode using nodemon
- `lint`: Checks the code formatting using Prettier

## License

This project is licensed under the UNLICENSED License.

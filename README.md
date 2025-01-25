# Express.js Clean Architecture

This project is an example of a clean architecture implementation using
Express.js and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- npm (or pnpm/yarn)

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

4. Create .env file: Here is an example of the `.env` file configuration:

   ```sh
    NODE_ENV=<development | production>
    PORT=3000
    LOG_LEVEL=info
    POSTGRES_USER=<your_postgres_user>
    POSTGRES_PASSWORD=<your_postgres_password>
    POSTGRES_HOST=<your_postgres_host>
    POSTGRES_PORT=<your_postgres_port>
    POSTGRES_DB=<your_postgres_db_name>
    POSTGRES_DEV=<true | false>
    POSTGRES_DEBUG=<true | false>
   ```

### Running the Application

To start the application in development mode, run:

```sh
npm run dev
```

The server will start on the port specified in the .env file.

### Project Structure

- `src/` Contains the source code
  - `core`
    - `ports` Core ports
      - `logger.port.ts`
  - `infrastructure/`
    - `adapters/` Adapters files
      - `winston-logger/` Winston Logger related files
        - `winston-logger.adapter.ts`
        - `winston-logger.config.ts`
    - `api/` API related files
      - `api.config.ts` Configuration for the API
      - `index.ts` Entry point for the API
      - `controllers/` Controllers files
        - `recipe/` Recipe related controllers
          - `recipe.codec.ts`
          - `recipe.controller.ts`
          - `dto/` Data Transfer Objects
            - `recipe.dto.ts`
            - `get-recipe.dto.ts`
            - `post-recipe.dto.ts`
  - `index.ts` Main entry point

### Configuration

The application uses environment variables defined in the `.env` file. Make sure
to set the necessary variables before running the application.

### Scripts

- `dev`: Starts the application in development mode using nodemon
- `lint`: Checks the code formatting using Prettier
- `build`: Generates the OpenAPI specification and routes using tsoa

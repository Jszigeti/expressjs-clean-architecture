import bodyParser from 'body-parser';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import { RegisterRoutes } from '../../../build/routes';
import swaggerDocument from '../../../build/swagger.json';

import config from './api.config';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/docs', serve, setup(swaggerDocument));

RegisterRoutes(app);

const server = app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
server.on('error', console.error);

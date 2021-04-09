import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { ServerlessNestjsApplicationFactory } from 'serverless-lambda-nestjs';
import { AppModule } from './app/app.module';

const globalPrefix = 'api';
export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

// Run Nestjs application locally
if (process.env.NX_CLI_SET) {
  bootstrap();
}

// Run Nestjs application in AWS Lambda
export const handler: APIGatewayProxyHandler = async (event, context) => {
  const app = new ServerlessNestjsApplicationFactory<AppModule>(
    AppModule,
    {
      // NestFactory.create's option object
      cors: {
        origin: '*',
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
      },
    },
    (app) => {
      app.enableCors();
      app.setGlobalPrefix(globalPrefix);
      return app;
    }
  );
  const result = await app.run(event, context);
  return result;
};

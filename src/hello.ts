import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import crypto from 'crypto';

export const helloHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || 'you';
  const hash = crypto.createHash('md5').update(name).digest('hex');

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `hello ${name}, ${hash}`}),
  };
};
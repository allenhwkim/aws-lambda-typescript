import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const worldHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'world' }),
  };
};
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const helloHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || 'you';

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'hello ' + name}),
  };
};
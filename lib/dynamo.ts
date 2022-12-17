import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

export const dynamoClient = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID,
    secretAccessKey: process.env.DYNAMO_SECRET_ACCESS_KEY,
  },
})
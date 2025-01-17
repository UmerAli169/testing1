const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'User1-qmz6if2ravaqhkdgesfywqkfta-test';

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event));

  const params = {
    TableName: TABLE_NAME,
  };

  try {
    // Fetch data from DynamoDB
    const result = await dynamoDb.scan(params).promise();
    console.log('Fetched Todos:', result.Items);

    // Return data in the correct format (object with customListUsers)
    return result.Items; 
    
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      customListUsers: [], // Return an empty array in case of error
    };
  }
};

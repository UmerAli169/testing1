const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'User1-qmz6if2ravaqhkdgesfywqkfta-test';

exports.handler = async (event) => {

    const { id, name, description } = event.arguments.input;

   

    const params = {
        TableName: TABLE_NAME,
        Key: {
            id: id, 
        },
        UpdateExpression: 'set #name = :name, #description = :description, #updatedAt = :updatedAt',
        ExpressionAttributeNames: {
            '#name': 'name',
            '#description': 'description',
            '#updatedAt': 'updatedAt'
        },
        ExpressionAttributeValues: {
            ':name': name,
            ':description': description,
            ':updatedAt': new Date().toISOString(),
        },
        ReturnValues: 'ALL_NEW' // Return the updated item after the update
    };

    try {
        // Perform the update operation
        const result = await dynamoDb.update(params).promise();
        console.log('Updated Todo:', result);

        return result.Attributes
            
    
    } catch (error) {
        console.error('Error updating Todo:', error);
        return error 
        };
}



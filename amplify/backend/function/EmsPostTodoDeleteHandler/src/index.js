const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'User1-qmz6if2ravaqhkdgesfywqkfta-test';

exports.handler = async (event) => {
    console.log('Event delete:', event);

    const  id  = event.arguments.input.id; // Get the ID of the Todo to delete from the event arguments

    

    // Define parameters for the delete operation
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id: event.arguments.input.id, // Ensure this is definedD of the Todo to delete
        },
    };

    try {
        // Perform the delete operation
        const result = await dynamoDb.delete(params).promise();
        console.log('Deleted Todo:', result);

        // Return a success response
        return   
           
        
        
    } catch (error) {
        console.error('Error deleting Todo:', error);
        return JSON.stringify({ message: 'Error deleting Todo item', error })
        
             
        
    }
};

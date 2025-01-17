const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'User1-qmz6if2ravaqhkdgesfywqkfta-test';

exports.handler = async (event) => {
    console.log('Event:', event);

    // Assuming the input payload contains the "name" and "description" of the Todo
    const { name, description } = event.arguments.input;

   

    // Define the new Todo item to add to the database
    const todoItem = {
        id: `${Date.now()}`, // Generate a unique ID for the Todo, you can replace this with a UUID if needed
        name: name,
        description: description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };

    const params = {
        TableName: TABLE_NAME,
        Item: todoItem,
    };

    try {
        // Insert the new Todo item into DynamoDB
        await dynamoDb.put(params).promise();
        console.log('Todo item added:', todoItem);

        return todoItem
        
        
    } catch (error) {
        console.error('Error adding Todo item:', error);
        return    error 
           
   
        
    }
};

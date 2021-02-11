import * as uuid from 'uuid';
import handler from "./libs/handler-lib";
import dynamoDB from "./libs/dynamodb-libs";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export async function main(event, context){

    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Item:{
            userid: "123",
            noteid: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }
    };
    await dynamoDB.put(params);
    return params.Item;
};
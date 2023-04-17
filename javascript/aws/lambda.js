const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({ apiVersion: '2017-10-17', region: 'us-east-1' });

class Lambda {
    static async invoke(functionName, invocationType, payload) {
        const result = await lambda.invoke({
            FunctionName: functionName,
            InvocationType: invocationType,
            Payload: payload
        }).promise();

        return result;
    }
}
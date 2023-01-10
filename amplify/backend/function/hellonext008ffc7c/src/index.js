/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context, callback) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    callback(null, event, context);
};
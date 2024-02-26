var PROTO_PATH = './service.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
var service_proto = grpc.loadPackageDefinition(packageDefinition).service;

function main() {
    const target = 'localhost:50051';

    var client = new service_proto.YourService(target, grpc.credentials.createInsecure());

    var addUserRequest = {
        id: 1,
        name: "Alvaro",
        email: "alvaro@gmail.com"
    };

    client.addUser(addUserRequest, function (err, response) {
        console.log('User added:', response.result);
    });

    client.getUser({ id: 1 }, function (err, response) {
        console.log('User:', response);
    });

    var operationRequestSum = {
        num1: 10,
        num2: 2,
        operation: 'sum'
    };

    // Suma
    client.operation(operationRequestSum, function (err, response) {
        console.log('Suma:', response.result);
    });

    // Resta
    client.operation({ num1: 1, num2: 2, operation: 'res' }, function (err, response) {
        console.log('Suma:', response.result);
    });

    // Multiplicación
    client.operation({ num1: 4, num2: 5, operation: 'mult' }, function (err, response) {
        console.log('Multiplicación:', response.result);
    });

    // División
    client.operation({ num1: 10, num2: 2, operation: 'div' }, function (err, response) {
        console.log('División:', response.result);
    });
}

main();

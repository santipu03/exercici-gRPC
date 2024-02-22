var PROTO_PATH = './service.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var service_proto = grpc.loadPackageDefinition(packageDefinition).service;

let users = []

// RPC Methods
function getUser(call, callback) {
    const user = users.find(user => user.id == call.request.id)
    if (user) {
        callback(null, user)
    } else {
        callback(null, {})
    }
}

function addUser(call, callback) {
    const user = {
        id: call.request.id, 
        name: call.request.name, 
        email: call.request.email
    }
    users.push(user)
    callback(null, {result: true})
}

function operation(call, callback) {
    let result;

    switch (call.request.operation) {
        case 'sum':
            result = call.request.num1 + call.request.num2
            break;
        case 'res':
            result = call.request.num1 - call.request.num2
            break;
        case 'mult':
            result = call.request.num1 * call.request.num2
            break;
        case 'div':
            result = call.request.num1 / call.request.num2
            break;
    }

    callback(null, {result: result})
}

// Starts an RPC server that receives requests for the service at the sample server port
function main() {
  var server = new grpc.Server();
  server.addService(service_proto.YourService.service, {getUser: getUser, addUser: addUser, operation: operation});
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();

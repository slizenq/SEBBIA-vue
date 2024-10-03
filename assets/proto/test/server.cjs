// const grpc = require('@grpc/grpc-js');
// const protoLoader = require('@grpc/proto-loader');
// const path = require('path');

// const PROTO_PATH = path.join(__dirname, 'calculator.proto');
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
// const calculatorProto = grpc.loadPackageDefinition(packageDefinition).Calculator;

// function add(call, callback) {
//   	const result = call.request.a + call.request.b;
//   	callback(null, { result });
// }

// function main() {
//     const server = new grpc.Server();
//     server.addService(calculatorProto.service, { Add: add });
//     server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
//         console.log(`Server running at http://127.0.0.1:${port}`);
//         server.start();
//   	});
// }

// main();

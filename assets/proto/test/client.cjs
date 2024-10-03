// // client.js (для использования в браузере)
// import { grpc } from '@improbable-eng/grpc-web';
// import { Calculator, AddRequest } from './calculator_grpc_web_pb'; 

// function main() {
//   const request = new AddRequest();
//   request.setA(5);
//   request.setB(3);

//   grpc.invoke(Calculator.Add, {
//     request: request,
//     host: 'http://localhost:50051',
//     onMessage: (response) => {
//       console.log(`Result: ${response.getResult()}`);
//     },
//     onEnd: (status, message) => {
//       if (status === grpc.Code.OK) {
//         console.log('Request completed successfully');
//       } else {
//         console.error('Request failed:', message);
//       }
//     },
//   });
// }

// export default main;

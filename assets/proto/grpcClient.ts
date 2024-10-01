// import { grpc } from "@improbable-eng/grpc-web";
// import type { UnaryMethodDefinition } from "@improbable-eng/grpc-web/dist/typings/service";
// import { type Rpc } from './vacancy'; 


// class GrpcWebImpl implements Rpc {
//   private host: string;
//   private options: grpc.RpcOptions;

//   constructor(host: string, options: grpc.RpcOptions) {
//     this.host = host;
//     this.options = options;
//   }
//     request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
//         throw new Error("Method not implemented.");
//     }

//   unary<T extends UnaryMethodDefinition<any, any>>(
//     methodDesc: T,
//     request: any,
//     metadata: grpc.Metadata | undefined
//   ): Promise<any> {
//     return new Promise((resolve, reject) => {
//       grpc.unary(methodDesc, {
//         request,
//         host: this.host,
//         metadata,
//         transport: this.options.transport,
//         onEnd: (response) => {
//           const { status, message } = response;
//           if (status === grpc.Code.OK && message) {
//             resolve(message.toObject());
//           } else {
//             reject(new Error(`Error: ${status}`));
//           }
//         },
//       });
//     });
//   }
// }

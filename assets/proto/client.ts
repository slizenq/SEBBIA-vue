// const grpc = require("@grpc/grpc-js");
// const protoLoader = require("@grpc/proto-loader");
// const path = require("path");

// // Загрузка и компиляция protobuf файла
// const PROTO_PATH = path.resolve(__dirname, "cloudevent.proto");
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
// });
// const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// // Получаем доступ к определению сервиса
// const CloudEventService = protoDescriptor.io.cloudevents.v1.CloudEventService;

// // Создаем объект CloudEvent
// const event = {
//     id: "unique-event-id",
//     source: "/my/source",
//     spec_version: "1.0",
//     type: "com.example.resume.send",
//     attributes: {
//         exampleAttribute: {
//             ce_string: "Example attribute value",
//         },
//     },
//     text_data: "Hello, CloudEvents!",
// };

// // Создаем запрос на публикацию
// const publishRequest = {
//     event: event,
// };

// // Создаем клиента для gRPC-сервиса
// const client = new CloudEventService(
//     "10.10.4.209:50051", // Замените на адрес вашего gRPC сервера
//     grpc.credentials.createInsecure()
// );

// // Отправка CloudEvent через gRPC
// const sendCloudEventWithGRPC = async () => {
//     return new Promise((resolve, reject) => {
//         client.Publish(publishRequest, (error: any, response: unknown) => {
//             if (error) {
//                 console.error(
//                     "Ошибка при отправке CloudEvent через gRPC:",
//                     error
//                 );
//                 reject(error);
//             } else {
//                 console.log(
//                     "CloudEvent отправлен успешно через gRPC:",
//                     response
//                 );
//                 resolve(response);
//             }
//         });
//     });
// };

// module.exports = { sendCloudEventWithGRPC };

// import * as grpc from "@grpc/grpc-js";
// import * as protoLoader from "@grpc/proto-loader";
// import path from "path";

// // Загрузка и компиляция protobuf файла
// const PROTO_PATH = path.resolve(__dirname, "cloudevent.proto");
// const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//     keepCase: true,
//     longs: String,
//     enums: String,
//     defaults: true,
//     oneofs: true,
// });
// const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// // Получаем доступ к определению сервиса
// const CloudEventService = protoDescriptor.io.cloudevents.v1.CloudEventService;

// // Создаем клиента для gRPC-сервиса
// const client = new CloudEventService(
//     "10.10.4.209:50051", // Замените на адрес вашего gRPC сервера
//     grpc.credentials.createInsecure()
// );

// // Создаем объект CloudEvent
// const event = {
//     id: "unique-event-id",
//     source: "/my/source",
//     spec_version: "1.0",
//     type: "com.example.resume.send",
//     attributes: {
//         exampleAttribute: {
//             ce_string: "Example attribute value",
//         },
//     },
//     text_data: "Hello, CloudEvents!",
// };

// // Создаем запрос на публикацию
// const publishRequest = {
//     event: event,
// };

// // Отправка CloudEvent через gRPC
// export const sendCloudEventWithGRPC = async () => {
//     return new Promise((resolve, reject) => {
//         client.Publish(publishRequest, (error: any, response: unknown) => {
//             if (error) {
//                 console.error(
//                     "Ошибка при отправке CloudEvent через gRPC:",
//                     error
//                 );
//                 reject(error);
//             } else {
//                 console.log(
//                     "CloudEvent отправлен успешно через gRPC:",
//                     response
//                 );
//                 resolve(response);
//             }
//         });
//     });
// };

import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

// Путь к вашему protobuf файлу
const PROTO_PATH = path.resolve(__dirname, "cloudevent.proto");

// Загрузка и компиляция protobuf файла
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

// Загрузка определения пакета
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// Получаем доступ к определению сервиса
const { CloudEventService } = protoDescriptor.io.cloudevents.v1;

// Создаем клиента для gRPC-сервиса
const client = new CloudEventService(
    "10.10.4.209:50051", // Замените на адрес вашего gRPC сервера
    grpc.credentials.createInsecure()
);

// Создаем объект CloudEvent
const event = {
    id: "unique-event-id",
    source: "/my/source",
    spec_version: "1.0",
    type: "com.example.resume.send",
    attributes: {
        exampleAttribute: {
            ce_string: "Example attribute value",
        },
    },
    text_data: "Hello, CloudEvents!",
};

// Создаем запрос на публикацию
const publishRequest = {
    event: event,
};

// Отправка CloudEvent через gRPC
export const sendCloudEventWithGRPC = async () => {
    return new Promise((resolve, reject) => {
        client.Publish(publishRequest, (error: any, response: any) => {
            if (error) {
                console.error(
                    "Ошибка при отправке CloudEvent через gRPC:",
                    error
                );
                reject(error);
            } else {
                console.log(
                    "CloudEvent отправлен успешно через gRPC:",
                    response
                );
                resolve(response);
            }
        });
    });
};

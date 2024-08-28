"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var protobufjs_1 = require("protobufjs");
var buffer_1 = require("buffer");
// Загрузка и настройка .proto файла
var PROTO_PATH = "./cloudevent.proto";
var packageDefinition = protoLoader.loadSync(PROTO_PATH);
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// Получаем сервис из загруженного описания
var CloudEventService = protoDescriptor.io.cloudevents.v1.CloudEventService;
// Создаем клиент для подключения к серверу gRPC
var client = new CloudEventService("10.10.4.209:50051", grpc.credentials.createInsecure());
// Создаем CloudEvent с правильной типизацией
var cloudEvent = {
    id: "unique-event-id",
    source: "/mycontext",
    spec_version: "1.0",
    type: "com.example.someevent",
    attributes: {
        message: {
            ce_string: "Hello World",
        },
    },
    binary_data: buffer_1.Buffer.from([]), // Если есть бинарные данные, добавьте их здесь
};
// Функция для сериализации данных в бинарный формат
function serializeMessage(message) {
    var root = (0, protobufjs_1.loadSync)(PROTO_PATH);
    var CloudEventProto = root.lookupType("io.cloudevents.v1.CloudEvent");
    var errMsg = CloudEventProto.verify(message);
    if (errMsg)
        throw Error(errMsg);
    return CloudEventProto.encode(CloudEventProto.create(message)).finish();
}
// Функция для отправки CloudEvent на сервер через gRPC
function sendCloudEvent(event) {
    var request = serializeMessage(event);
    client.Publish(request, function (error, _response) {
        if (error) {
            console.error("Ошибка при отправке CloudEvent:", error);
        }
        else {
            console.log("Событие отправлено успешно");
        }
    });
}
// Отправляем событие
sendCloudEvent(cloudEvent);

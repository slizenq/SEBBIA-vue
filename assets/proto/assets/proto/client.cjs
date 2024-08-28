"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = require("@grpc/grpc-js");
// Создаем клиент для подключения к серверу gRPC
var client = new grpc.Client("10.10.4.209:50051", grpc.credentials.createInsecure());
// Создаем CloudEvent с правильной типизацией
var cloudEvent = {
    id: "unique-event-id",
    source: "/mycontext",
    specVersion: "1.0",
    type: "com.example.someevent",
    attributes: {
        message: {
            ceString: "Hello World",
        },
    },
};
// Функция для отправки CloudEvent на сервер через gRPC
function sendCloudEvent(event) {
    var request = { event: event };
    client.makeUnaryRequest("/io.cloudevents.v1.CloudEventService/Publish", function (arg) { return Buffer.from(JSON.stringify(arg)); }, function (buffer) { }, request, function (error, _response) {
        // Игнорируем _response, так как он не используется
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

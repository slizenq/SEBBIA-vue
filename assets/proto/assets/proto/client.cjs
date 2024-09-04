"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var uuid_1 = require("uuid");
var protobufjs_1 = require("protobufjs");
// Загрузка и настройка .proto файла
var PROTO_PATH = "./cloudevent.proto";
var packageDefinition = protoLoader.loadSync(PROTO_PATH);
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// Получаем сервис из загруженного описания
var CloudEventService = protoDescriptor.io.cloudevents.v1.CloudEventService;
// Создаем клиент для подключения к серверу gRPC
var client = new CloudEventService("10.10.4.254:50051", grpc.credentials.createInsecure());
// Создаем данные резюме
var resume = {
    resumeId: (0, uuid_1.v4)(),
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
    phoneNumber: "+1234567890",
    education: "Bachelor of Computer Science",
    aboutMe: "Experienced developer",
    skills: [{ skill: "TypeScript" }, { skill: "gRPC" }],
    photo: "base64encodedimage", // Предполагается, что фото уже закодировано в base64
    directions: [{ direction: "Backend" }, { direction: "Frontend" }],
    aboutProjects: "Worked on various web applications",
    portfolio: "https://portfolio.example.com",
    studentGroup: "Group A",
};
// Загружаем protobuf корень и находим типы
var root = (0, protobufjs_1.loadSync)(PROTO_PATH);
var CloudEventProto = root.lookupType("io.cloudevents.v1.CloudEvent");
var PublishRequestProto = root.lookupType("io.cloudevents.v1.PublishRequest");
// Сериализация данных резюме в строку JSON и кодирование в base64
var serializedResume = Buffer.from(JSON.stringify(resume)).toString("base64");
// Создаем CloudEvent через метод create()
var cloudEvent = CloudEventProto.create({
    id: (0, uuid_1.v4)(),
    type: "com.resume.created",
    source: "/my/resume/service",
    data: {
        binary_data: serializedResume,
    },
});
// Логирование данных перед отправкой для диагностики
console.log("CloudEvent before sending:", JSON.stringify(cloudEvent, null, 2));
// Создаем PublishRequest, в котором содержится CloudEvent
var publishRequest = PublishRequestProto.create({
    event: cloudEvent,
});
// Логирование запроса перед сериализацией
console.log("PublishRequest before sending:", JSON.stringify(publishRequest, null, 2));
// Функция для сериализации данных в бинарный формат
function serializeMessage(message) {
    var errMsg = PublishRequestProto.verify(message);
    if (errMsg)
        throw Error(errMsg);
    return PublishRequestProto.encode(message).finish(); // Используйте encode для создания бинарного формата
}
// Функция для отправки CloudEvent на сервер через gRPC
function sendCloudEvent(event) {
    var request = serializeMessage(event);
    client.Publish({ event: request }, function (error, _response) {
        if (error) {
            console.error("Ошибка при отправке CloudEvent:", error);
        }
        else {
            console.log("Событие отправлено успешно");
        }
    });
}
// Отправляем событие
sendCloudEvent(publishRequest);

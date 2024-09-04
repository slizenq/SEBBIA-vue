import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { v4 as uuidv4 } from "uuid";
import { loadSync } from "protobufjs";

// Загрузка и настройка .proto файла
const PROTO_PATH = "./";
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;

// Получаем сервис из загруженного описания
const CloudEventService = protoDescriptor.io.cloudevents.v1.CloudEventService;

// Создаем клиент для подключения к серверу gRPC
const client = new CloudEventService(
    "10.10.4.254:50051",
    grpc.credentials.createInsecure()
);

// Создаем данные резюме
const resume = {
    resumeId: uuidv4(),
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
const root = loadSync(PROTO_PATH);
const CloudEventProto = root.lookupType("io.cloudevents.v1.CloudEvent");
const PublishRequestProto = root.lookupType("io.cloudevents.v1.PublishRequest");

// Сериализация данных резюме в строку JSON и кодирование в base64
const serializedResume = Buffer.from(JSON.stringify(resume)).toString("base64");

// Создаем CloudEvent через метод create()
const cloudEvent = CloudEventProto.create({
    id: uuidv4(),
    type: "com.resume.created",
    source: "/my/resume/service",
    data: {
        binary_data: serializedResume,
    },
});

// Логирование данных перед отправкой для диагностики
console.log("CloudEvent before sending:", JSON.stringify(cloudEvent, null, 2));

// Создаем PublishRequest, в котором содержится CloudEvent
const publishRequest = PublishRequestProto.create({
    event: cloudEvent,
});

// Логирование запроса перед сериализацией
console.log(
    "PublishRequest before sending:",
    JSON.stringify(publishRequest, null, 2)
);

// Функция для сериализации данных в бинарный формат
function serializeMessage(message: any) {
    const errMsg = PublishRequestProto.verify(message);
    if (errMsg) throw Error(errMsg);
    return PublishRequestProto.encode(message).finish(); // Используйте encode для создания бинарного формата
}

// Функция для отправки CloudEvent на сервер через gRPC
function sendCloudEvent(event: any) {
    const request = serializeMessage(event);

    client.Publish(
        { event: request },
        (error: grpc.ServiceError | null, _response: Buffer) => {
            if (error) {
                console.error("Ошибка при отправке CloudEvent:", error);
            } else {
                console.log("Событие отправлено успешно");
            }
        }
    );
}

// Отправляем событие
sendCloudEvent(publishRequest);

import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import type { ServiceError } from "@grpc/grpc-js";
import { loadSync } from "protobufjs";
import { Buffer } from "buffer";

// Загрузка и настройка .proto файла
const PROTO_PATH = "./cloudevent.proto";
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;

// Получаем сервис из загруженного описания
const CloudEventService = protoDescriptor.io.cloudevents.v1.CloudEventService;

// Создаем клиент для подключения к серверу gRPC
const client = new CloudEventService(
    "10.10.4.209:50051",
    grpc.credentials.createInsecure()
);

// Создаем CloudEvent с правильной типизацией
const cloudEvent = {
    id: "unique-event-id",
    source: "/mycontext",
    spec_version: "1.0",
    type: "com.example.someevent",
    attributes: {
        message: {
            ce_string: "Hello World",
        },
    },
    binary_data: Buffer.from([]), // Если есть бинарные данные, добавьте их здесь
};

// Функция для сериализации данных в бинарный формат
function serializeMessage(message: any) {
    const root = loadSync(PROTO_PATH);
    const CloudEventProto = root.lookupType("io.cloudevents.v1.CloudEvent");
    const errMsg = CloudEventProto.verify(message);
    if (errMsg) throw Error(errMsg);
    return CloudEventProto.encode(CloudEventProto.create(message)).finish();
}

// Функция для отправки CloudEvent на сервер через gRPC
function sendCloudEvent(event: any) {
    const request = serializeMessage(event);

    client.Publish(request, (error: ServiceError | null, _response: Buffer) => {
        if (error) {
            console.error("Ошибка при отправке CloudEvent:", error);
        } else {
            console.log("Событие отправлено успешно");
        }
    });
}

// Отправляем событие
sendCloudEvent(cloudEvent);

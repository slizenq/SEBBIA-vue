import * as grpc from "@grpc/grpc-js";
import type { ServiceError } from "@grpc/grpc-js";
import { CloudEvent, PublishRequest } from "./cloudevent"; // Импортируем сгенерированные типы

// Создаем клиент для подключения к серверу gRPC
const client = new grpc.Client(
    "10.10.4.209:50051",
    grpc.credentials.createInsecure()
);

// Создаем CloudEvent с правильной типизацией
const cloudEvent: CloudEvent = {
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
function sendCloudEvent(event: CloudEvent) {
    const request: PublishRequest = { event };

    client.makeUnaryRequest(
        "/io.cloudevents.v1.CloudEventService/Publish",
        (arg) => Buffer.from(JSON.stringify(arg)),
        (buffer) => {},
        request,
        (error: ServiceError | null, _response: any) => {
            // Игнорируем _response, так как он не используется
            if (error) {
                console.error("Ошибка при отправке CloudEvent:", error);
            } else {
                console.log("Событие отправлено успешно");
            }
        }
    );
}

// Отправляем событие
sendCloudEvent(cloudEvent);

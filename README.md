Пока не микросервис 😈, весь функционал будет работать если на моем пк подняты все контейнеры 👿 плаки плаки((

gRPC-web


// Рассмотрим использование gRPC-Web в браузере.
Мы рассмотрим:
    1) Определение службы в файле .proto.
    2) Сгенерируем клиентский код с помощью компилятора буфера протокола.
    3) Используйте gRPC-Web API для написания простого клиента для вашего сервиса.


// Шаги для добавления protoc.exe в переменную PATH:
Извлеките файл protoc.exe:

Скачайте архив с protoc для Windows с официального GitHub-репозитория.
Извлеките архив в удобную папку, например, C:\Program Files\protoc.
Добавьте папку с protoc.exe в переменную PATH
!!! Если PowerShell компилятор не видит нашу переменную проверим есть ли она у нас в path $Env:Path если ее нету используем $Env:Path += ";C:\Program Files\protoc\bin"


// Определение службы
Первым шагом при создании сервиса gRPC является определение методов сервиса а также типы сообщений запроса и ответа с использованием буферов протокола. В этом примере, мы определяем our в файле с именем vacancy.proto

message EchoRequest {
    string message = 1;
}

message EchoResponse {
    string message = 1;
}

service EchoService {
    rpc Echo(EchoRequest) returns (EchoResponse);
}

.proto используется для описания структуры сообщений и сервисов, которые могут быть использованы для генерации кода на разных языках программирования для клиентов и серверов. .proto позволяет определить формат данных, который обмениваются клиенты и серверы.


// Реализация бэкенд-сервера gRPC
Далее мы реализуем наш интерфейс EchoService с помощью Node в бэкенде gRPC. Это позволит обрабатывать запросы от клиентов. Посмотреть файл EchoServernode-server/server.js для получения подробной информации.

function doEcho(call, callback) {
  callback(null, {message: call.request.message});
}


// Написание кода клиента JS 

const {EchoRequest, EchoResponse} = require('./echo_pb.js');
const {EchoServiceClient} = require('./echo_grpc_web_pb.js');

var echoService = new EchoServiceClient('http://localhost:8080');
var request = new EchoRequest();
request.setMessage('Hello World!');
echoService.echo(request, {}, function(err, response) {
  // ...
});


Вам понадобится файлpackage.json

{
    "name": "grpc-web-commonjs-example",
    "dependencies": {
        "google-protobuf": "^3.6.1",
        "grpc-web": "^0.4.0"
    },
    "devDependencies": {
        "browserify": "^16.2.2",
        "webpack": "^4.16.5",
        "webpack-cli": "^3.1.0"
    }
}
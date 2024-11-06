ts-proto

npm install ts-proto

protoc --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=importSuffix=.js:. assets\proto\test\example.proto

CreateApplicationVacancy: создает новую заявку на вакансию.

Запрос: CreateApplicationVacancyReq
Ответ: ApplicationVacancyRes
ReviewApplicationVacancy: меняет статус заявки на "просмотрено".

Запрос: ChangeStatusReq
Ответ: google.protobuf.Empty (не возвращает данных)
AcceptApplicationVacancy: принимает заявку, изменяя её статус на "принято".

Запрос: ChangeStatusReq
Ответ: google.protobuf.Empty
RejectApplicationVacancy: отклоняет заявку, изменяя её статус на "отклонено".

Запрос: ChangeStatusReq
Ответ: google.protobuf.Empty
GetApplicationVacancyById: получает информацию о заявке по её идентификатору.

Запрос: GetApplicationVacancyByIdReq
Ответ: ApplicationVacancyRes
GetApplicationsVacancyByVacancyId: получает список заявок для определенной вакансии, поддерживая пагинацию.

Запрос: GetApplicationsVacancyByVacancyIdReq
Ответ: ListApplicationVacancyRes
GetApplicationsVacancyByResumeId: получает список заявок для определенного резюме, поддерживая пагинацию.

Запрос: GetApplicationsVacancyByResumeIdReq
Ответ: ListApplicationVacancyRes
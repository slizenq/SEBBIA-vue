import { VacancyServiceClient, CreateVacancyRequest } from './vacancy_grpc_web_pb';

const hostname = 'http://localhost:8000';  
const client = new VacancyServiceClient(hostname, null, null);

const request = new CreateVacancyRequest();
request.setTitle('Вакансия разработчика');
request.setDescription('Описание вакансии');
request.setSalary(100000);

client.createVacancy(request, {}, (err, response) => {
  if (err) {
    console.error('Ошибка при создании вакансии:', err.message);
    return;
  }
  
  console.log('Вакансия успешно создана:', response.toObject());
});

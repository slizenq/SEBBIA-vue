import { ExampleServiceClient, ExampleRequest } from './example';  
import grpc from '@grpc/grpc-js';   

const credentials = grpc.credentials.createInsecure();

const client = new ExampleServiceClient('localhost:50051', credentials);
const request: ExampleRequest = {
  query: 'query'
};

(function executeRequest() {
  if (!ExampleServiceClient || !ExampleRequest) {
    console.error('Клиент или запрос не сгенерированы корректно');
    return;
  }

  client.getExample(request, (err, response) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Response:', response);
    }
  });
})();

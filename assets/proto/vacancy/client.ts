
// import { VacancyServiceClientImpl, Vacancy, CreateVacancyRequest } from "./vacancy";

// class GrpcWebRpcImpl {
//   private readonly url: string;

//   constructor(url: string) {
//     this.url = url;
//   }

//   async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
//     const response = await fetch(`${this.url}/${service}/${method}`, {
//       method: 'POST',
//       body: data,
//       headers: {
//         'Content-Type': 'application/grpc-web',
//         'X-Grpc-Web': '1',
//         'X-User-Agent': 'grpc-web',
//       },
//     });
    
//     if (!response.ok) {
//       throw new Error(`gRPC request failed with status ${response.status}`);
//     }

//     return new Uint8Array(await response.arrayBuffer());
//   }
// }

// const rpc = new GrpcWebRpcImpl('http://10.10.4.104');  
// const vacancyClient = new VacancyServiceClientImpl(rpc);

// async function createVacancy() {
//   const vacancy: Vacancy = {
//     expectedSkills: [{ skill: 'JavaScript' }],
//     aboutPractice: 'Practice description',
//     directions: [{ direction: 'Frontend' }],
//     aboutProjects: 'Project description',
//     companyId: '123e4567-e89b-12d3-a456-426614174000',
//   };

//   const request: CreateVacancyRequest = { vacancy };

//   try {
//     const response = await vacancyClient.CreateVacancy(request);
//     console.log('Vacancy created with ID:', response.id);
//   } catch (error) {
//     console.error('Error creating vacancy:', error);
//   }
// }

// createVacancy();

import { grpc } from "@improbable-eng/grpc-web";
import { VacancyServiceClientImpl, Vacancy, CreateVacancyRequest, VacancyResponse } from "./vacancy";

type RpcImpl = (service: string, method: string, request: any) => Promise<any>;

const sendRequest: RpcImpl = (service, method, request) => {
  return new Promise((resolve, reject) => {
    grpc.unary(VacancyServiceClientImpl[method], {
      request,
      host: "http://10.10.4.104/",  
      onEnd: (response) => {
        const { status, message } = response;
        if (status !== grpc.Code.OK || !message) {
          return reject(new Error(`gRPC request failed with status code: ${status}`));
        }
        resolve(message);
      },
    });
  });
};

const rpc = { request: sendRequest };

const vacancyClient = new VacancyServiceClientImpl(rpc);

async function createVacancy() {
  const vacancy: Vacancy = {
    expectedSkills: [{ skill: "JavaScript" }],
    aboutPractice: "Practice description",
    directions: [{ direction: "Frontend" }],
    aboutProjects: "Project description",
    companyId: "123e4567-e89b-12d3-a456-426614174000",
  };

  const request: CreateVacancyRequest = new CreateVacancyRequest({ vacancy });

  try {
    const response: VacancyResponse = await vacancyClient.CreateVacancy(request);
    console.log("Vacancy created with ID:", response.id);
  } catch (error) {
    console.error("Error creating vacancy:", error);
  }
}

createVacancy();



























// import { VacancyServiceClientImpl, Vacancy, CreateVacancyRequest, type Rpc } from './vacancy';
// import { grpc } from '@improbable-eng/grpc-web';


// class CustomRpcImpl implements Rpc {
//   private readonly url: string;
//   constructor(url: string) {
//     this.url = url;
//   }
//   async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
//     const result = await someGrpcLibrary.call(this.url, service, method, data);
//     return result;  
//   }
// }
// const rpc = new CustomRpcImpl('http://10.10.4.104');
// const vacancyClient = new VacancyServiceClientImpl(rpc);
// async function createVacancy() {
//   const vacancy: Vacancy = {
//     expectedSkills: [{ skill: 'JavaScript' }],
//     aboutPractice: 'Practice description',
//     directions: [{ direction: 'Frontend' }],
//     aboutProjects: 'Project description',
//     companyId: '123e4567-e89b-12d3-a456-426614174000',
//   };
//   const request: CreateVacancyRequest = { vacancy };
//   try {
//     const response = await vacancyClient.CreateVacancy(request);
//     console.log('Vacancy created with ID:', response.id);
//   } catch (error) {
//     console.error('Error creating vacancy:', error);
//   }
// }
// createVacancy();

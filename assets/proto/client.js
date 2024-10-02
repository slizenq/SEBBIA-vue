import { VacancyServiceClient } from './vacancy_grpc_web_pb.d';  
import { CreateVacancyRequest, Vacancy, Skill, Direction } from './vacancy_pb.d';  

const client = new VacancyServiceClient('http://localhost:8080');

export function createVacancy() {
  
    console.log(client);  
      
    const vacancy = new Vacancy();
    vacancy.setAboutPractice('Frontend internship');
    vacancy.setAboutProjects('Working on real-world projects');
    vacancy.setCompanyId('12345');
	console.log(vacancy);
	
    // const skill1 = new Skill();
    // skill1.setSkill('JavaScript');
    // vacancy.addExpectedSkills(skill1);

    // const skill2 = new Skill();
    // skill2.setSkill('Vue.js');
    // vacancy.addExpectedSkills(skill2);

    // const direction = new Direction();
    // direction.setDirection('Frontend development');
    // vacancy.addDirections(direction);

    // const request = new CreateVacancyRequest();
    // request.setVacancy(vacancy);

    // const metadata = {}; 

    // client.createVacancy(request, metadata, (err, response) => {
    //     if (err) {
    //         console.error('Error creating vacancy:', err);
    //     } else {
    //         console.log('Vacancy created successfully:', response.toObject());
    //     }
    // });
}

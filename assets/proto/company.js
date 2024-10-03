import { CompanyServiceClient } from './company/companyService_grpc_web_pb.d';  
import { GetCompanyRequest } from './company/companyService_pb.d'; 
// import { GetCompanyResponse } from './company/company_pb.d';  

const client = new CompanyServiceClient('localhost:50051', null, null);

export function getCompany(title) {
    const request = new GetCompanyRequest();
    request.setTitle = title  
    client.getCompany(request, {}, (err, response) => {
        if (err) {
        console.error("Error:", err.message);
        return;
    }
    const company = response.toObject();
    console.log("Company Info:", company);
    });
}
// getCompany('My Company Title');

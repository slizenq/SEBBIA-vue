import { SSOServerServicePromiseClient } from './auth/authService_grpc_web_pb.d';  
import { LoginData } from './auth/authService_pb.d';  
import { Email, Password } from './auth/account_pb.d';  

const client = new SSOServerServicePromiseClient('http://10.10.4.45:50051/');  

function authh() {
    const email = new Email();
    email.setEmail = 'user@example.com';  

    const password = new Password();
    password.setPassword = '123123123231';  

    const loginData = new LoginData();
    loginData.setEmail = email;
    loginData.setPassword = password;
    console.log(client);
    
    client.login(loginData)
        .then(response => {
        console.log('Login successful:', response.toObject());
        })
        .catch(error => {
        console.error('Login failed:', error);
        });
}

export default authh
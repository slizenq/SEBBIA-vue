// import axios from 'axios';
// import { Account } from './account';
// import { SSOServerServiceClientImpl } from './authService';
// import { LoginData, Token, Empty, RefreshToken, NewPassword, NewEmail, SendOTPRequest, OTPRequest, RestorePasswordRequest } from './authService';

// class GrpcWebRpcImpl {
//   private readonly url: string;

//   constructor(url: string) {
//     this.url = url;
//   }

//   async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
//     // const response = await axios.post(`${this.url}/${service}/${method}`, data, {
//     //   headers: {
//     //     'Content-Type': 'application/grpc+proto',  
//     //     'X-Grpc-Web': '1',
//     //     'X-User-Agent': 'grpc-web',
//     //   },
//     //   responseType: 'arraybuffer'
//     // });


//     const response = await fetch(`${this.url}/${service}/${method}`, {
//       method: 'POST',
//       body: data,
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/grpc-web+proto',
//         'X-Grpc-Web': '1',
//         'X-User-Agent': 'grpc-web',
//       },
//     });


//     // return new Uint8Array(response.data);
//     if (!response.ok) {
//       throw new Error(`gRPC request failed with status ${response.status}`);
//     }

//     return new Uint8Array(await response.arrayBuffer());
//   }
// }

// const rpc = new GrpcWebRpcImpl('http://10.10.4.33:1488'); 
// const ssoClient = new SSOServerServiceClientImpl(rpc);

//  async function signUp() {
//   const account: Account = {
//     email: { email: 'sobaka1@gmail.com' },
//     password: { password: 'ShadowFiend123!' },
//     isCompany: false,
//   };

//   try {
//     const response = await ssoClient.SignUp(account);
//     console.log('SignUp Response:', response);
//     console.log('success');

//   } catch (error) {
//     console.error('Error during signUp:', error);
//     console.log('warn');
//   }
// }

// async function login() {
//   const loginData: LoginData = {
//     email: { email: 'test@example.com' },
//     password: { password: 'password123' },
//   };

//   try {
//     const response = await ssoClient.Login(loginData);
//     console.log('Login Response:', response);
//   } catch (error) {
//     console.error('Error during login:', error);
//   }
// }

// async function verifyToken() {
//   const token: Token = { token: 'some_access_token' };

//   try {
//     const response = await ssoClient.VerifyToken(token);
//     console.log('VerifyToken Response:', response);
//   } catch (error) {
//     console.error('Error during verifyToken:', error);
//   }
// }

// async function changePassword() {
//   const newPassword: NewPassword = {
//     oldPassword: { password: 'old_password' },
//     password: { password: 'new_password' },
//   };

//   try {
//     const response = await ssoClient.ChangePassword(newPassword);
//     console.log('ChangePassword Response:', response);
//   } catch (error) {
//     console.error('Error during changePassword:', error);
//   }
// }

// export /* async */ function penisi() {
//   /* await */ signUp();
//   // login();
//   // verifyToken();
//   // changePassword();
// }













// /////////////////////////


// import { SSOServerServiceClientImpl } from './authService';
// import { Account } from './account'
// import { grpc } from '@improbable-eng/grpc-web';

// const client = new SSOServerServiceClientImpl({
// 	host: 'http://10.10.4.33:81',
// 	transport: grpc.CrossBrowserHttpTransport({ withCredentials: false })
// });

// // const signUpRequest = new Account();
// // signUpRequest.setUsername("sobaka1@gmail.com");
// // signUpRequest.setPassword("ShadowFiend123!");
// const account: Account = {
// 	    email: { email: 'sobaka1@gmail.com' },
// 	    password: { password: 'ShadowFiend123!' },
// 	    isCompany: false,
// 	  };

// export function shit() {
// 	client.SignUp(account).then(response => {
// 		console.log("Success", response);
// 	}).catch(error => {
// 		console.error("Error", error);
// 	});
// }

// export /* async */ function penisi() {
//   /* await */ shit();
// }





////////////////////////////////////////////







// import { SSOServerServiceClientImpl } from './authService';  
// import { Account } from './account';  
// import { grpc } from '@improbable-eng/grpc-web';

// class GrpcWebRpc {
//   private host: string;

//   constructor(host: string) {
//     this.host = host;
//   }

//   request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
//     return new Promise((resolve, reject) => {
//       grpc.unary(service + '.' + method, {
//         request: data,
//         host: this.host,
//         onEnd: (res) => {
//           const { status, message } = res;
//           if (status === grpc.Code.OK && message) {
//             resolve(message.toObject() as Uint8Array);
//           } else {
//             reject(new Error(res.statusMessage));
//           }
//         },
//       });
//     });
//   }
// }

// const rpc = new GrpcWebRpc('http://10.10.4.33:81');
// const client = new SSOServerServiceClientImpl(rpc);

// const account: Account = {
// 	    email: { email: 'sobaka1@gmail.com' },
// 	    password: { password: 'ShadowFiend123!' },
// 	    isCompany: false,
// 	  };

// export function shit() {
//   client.SignUp(account).then(response => {
//     console.log('Success', response);
//   }).catch(error => {
//     console.error('Error', error);
//   });
// }

// export function penisi() {
//   shit();
// }









//////////////////////////


// const newAccount: Account = {
//   username: "exampleUser",
//   password: "examplePassword",
//   email: "example@example.com",
// };

// signUpUser(newAccount);



// import { SSOServerServiceClientImpl, Rpc } from './authService';
// import { Account } from './account';
// class GrpcRpc implements Rpc {
// 	request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
// 		throw new Error('Method not implemented.');
// 	}
// }
// export const signUpUser = async (accountData: Account) => {
// 	const rpc = new GrpcRpc();
// 	const opts = { service: 'http://10.10.4.33:1488' };
// 	const client = new SSOServerServiceClientImpl(rpc, opts);

// 	try {
// 		const response = await client.SignUp(accountData);
// 		console.log("Успешно зарегистрировано!", response);
// 	} catch (error) {
// 		console.error("Ошибка при регистрации:", error);
// 	}
// };

// const newAccount: Account = {
// 	email: { email: "sobaka1@gmail.com" },  
// 	password: { password: "ShadowFiend123!" },  
// 	isCompany: false,  
//   };

// signUpUser(newAccount);







// ///////////////////


// import { grpc } from "@improbable-eng/grpc-web";
// import { SSOServerServiceClientImpl } from './authService';
// // import { Account, LoginData, Token, NewPassword } from './authService';   
// import { Account } from './account';

// class GrpcWebRpcImpl {
//     private readonly url: string;

//     constructor(url: string) {
//         this.url = url;
//     }

//     async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
//         try {
//             const response = await fetch(`${this.url}/${service}/${method}`, {
//                 method: 'POST',
//                 body: data,
//                 mode: 'cors',
//                 headers: {
//                     'Content-Type': 'application/grpc-web+proto',
//                     'X-Grpc-Web': '1',
//                     'X-User-Agent': 'grpc-web',
//                 }
//             });

//             if (!response.ok) {
//                 throw new Error(`gRPC request failed with status ${response.status}`);
//             }

//             return new Uint8Array(await response.arrayBuffer());
//         } catch (error) {
//             console.error('Error making gRPC request:', error);
//             throw error;   
//         }
//     }
// }

// const rpc = new GrpcWebRpcImpl('http://10.10.4.33:1488');
// const ssoClient = new SSOServerServiceClientImpl(rpc);

// async function signUp() {
//     const account: Account = {
//         email: { email: 'sobaka1@gmail.com' },
//         password: { password: 'ShadowFiend123!' },
//         isCompany: false,
//     };

//     try {
//         const response = await ssoClient.SignUp(account);
//         console.log('SignUp Response:', response);
//     } catch (error) {
//         console.error('Error during signUp:', error);
//     }
// }

// async function login() {
//     const loginData: LoginData = {
//         email: { email: 'test@example.com' },
//         password: { password: 'password123' },
//     };

//     try {
//         const response = await ssoClient.Login(loginData);
//         console.log('Login Response:', response);
//     } catch (error) {
//         console.error('Error during login:', error);
//     }
// }

// async function verifyToken() {
//     const token: Token = { token: 'some_access_token' };

//     try {
//         const response = await ssoClient.VerifyToken(token);
//         console.log('VerifyToken Response:', response);
//     } catch (error) {
//         console.error('Error during verifyToken:', error);
//     }
// }

// async function changePassword() {
//     const newPassword: NewPassword = {
//         oldPassword: { password: 'old_password' },
//         password: { password: 'new_password' },
//     };

//     try {
//         const response = await ssoClient.ChangePassword(newPassword);
//         console.log('ChangePassword Response:', response);
//     } catch (error) {
//         console.error('Error during changePassword:', error);
//     }
// }
// signUp()
// export async function execute() {
//     await signUp();
//     // await login();
//     // await verifyToken();
//     // await changePassword();
// }
// console.log('in f');
// execute();
// console.log('no f');

/// http2

export async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // const data = await response.json();
        console.log('Posts:', response);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchPosts();


import { grpc } from "@improbable-eng/grpc-web";
import { SSOServerServiceServiceName } from './authService';
import { Account, Email, Password } from "./account.js";

import { TokensWithUserInfo } from './authService';
import { BinaryReader } from "@bufbuild/protobuf/wire";

const host = "http://10.10.4.33:1488";

const SignUpMethod = {
    methodName: "SignUp",
    service: {
        serviceName: SSOServerServiceServiceName
    },
    requestStream: false,
    responseStream: false,
    requestType: {
        serializeBinary: (request: Account) => Account.encode(request).finish()
    },
    responseType: {
        deserializeBinary: (bytes: Uint8Array) => TokensWithUserInfo.decode(new BinaryReader(bytes))
    }
};

async function signUp() {
    const account: Account = {
        email: { email: 'sobaka1@gmail.com' } as Email,
        password: { password: 'ShadowFiend123!' } as Password,
        isCompany: false,
    };

    return new Promise<TokensWithUserInfo>((resolve, reject) => {
        grpc.unary(SignUpMethod, {
            request: account,
            host: host,
            onEnd: res => {
                const { status, statusMessage, headers, message, trailers } = res;
                if (status === grpc.Code.OK && message) {
                    resolve(message as unknown as TokensWithUserInfo);
                } else {
                    reject(new Error(statusMessage));
                }
            }
        });
    });
}

export async function execute() {
    try {
        const response = await signUp();
        console.log('SignUp Response:', response);
    } catch (error) {
        console.error('Error during signUp:', error);
    }
}

console.log('Starting execution');
execute();




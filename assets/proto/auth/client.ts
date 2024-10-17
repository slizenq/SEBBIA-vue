import { Account } from './account';
import { SSOServerServiceClientImpl } from './authService';
import { LoginData, Token, Empty, RefreshToken, NewPassword, NewEmail, SendOTPRequest, OTPRequest, RestorePasswordRequest } from './authService';





// Конфигурируем RPC для взаимодействия с gRPC-web
class GrpcWebRpcImpl {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    // Используем fetch API для отправки запроса через gRPC-web
    const response = await fetch(`${this.url}/${service}/${method}`, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/grpc-web',
        'X-Grpc-Web': '1',
        'X-User-Agent': 'grpc-web',
      },
    });

    if (!response.ok) {
      throw new Error(`gRPC request failed with status ${response.status}`);
    }

    return new Uint8Array(await response.arrayBuffer());
  }
}

// Пример использования клиента:
const rpc = new GrpcWebRpcImpl('http://localhost:8080'); // URL вашего gRPC сервера
const ssoClient = new SSOServerServiceClientImpl(rpc);

// Пример использования функций сервиса
async function signUp() {
  const account: Account = {
    email: { email: 'test@example.com' },
    password: { password: 'password123' },
    isCompany: false,
  };

  try {
    const response = await ssoClient.SignUp(account);
    console.log('SignUp Response:', response);
  } catch (error) {
    console.error('Error during signUp:', error);
  }
}

async function login() {
  const loginData: LoginData = {
    email: { email: 'test@example.com' },
    password: { password: 'password123' },
  };

  try {
    const response = await ssoClient.Login(loginData);
    console.log('Login Response:', response);
  } catch (error) {
    console.error('Error during login:', error);
  }
}

async function verifyToken() {
  const token: Token = { token: 'some_access_token' };

  try {
    const response = await ssoClient.VerifyToken(token);
    console.log('VerifyToken Response:', response);
  } catch (error) {
    console.error('Error during verifyToken:', error);
  }
}

async function changePassword() {
  const newPassword: NewPassword = {
    oldPassword: { password: 'old_password' },
    password: { password: 'new_password' },
  };

  try {
    const response = await ssoClient.ChangePassword(newPassword);
    console.log('ChangePassword Response:', response);
  } catch (error) {
    console.error('Error during changePassword:', error);
  }
}

// Вызов функций
signUp();
login();
verifyToken();
changePassword();

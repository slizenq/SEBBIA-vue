// const http2 = require('http2');
// const { SSOServerServiceClientImpl } = require('./authService.js');

// const client = http2.connect('http://92.53.105.243:81');

// class GrpcWebRpc {
//   constructor(client) {
//     this.client = client;
//   }

//   request(service, method, data) {
//     return new Promise((resolve, reject) => {
//       const req = this.client.request({
//         ':method': 'POST',
//         ':path': `/${service}/${method}`,
//         'content-type': 'application/grpc-web+proto',
//       });

//       const chunks = [];
//       req.on('data', (chunk) => {
//         chunks.push(chunk);
//       });

//       req.on('end', () => {
//         resolve(Buffer.concat(chunks));
//       });

//       req.on('error', (err) => {
//         reject(err);
//       });

//       req.write(data);
//       req.end();
//     });
//   }
// }

// const rpc = new GrpcWebRpc(client);
// const ssoClient = new SSOServerServiceClientImpl(rpc);

// const request = {
//   email: 'viktor.rak05@gmail.com',
//   password: 'ShadowFiend123!',
//   isCompany: false
// };

// async function signUp() {
//   try {
//     const response = await ssoClient.SignUp(request);
//     console.log('Response:', response);
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// signUp();

// module.exports = { signUp };

const http2 = require("http2");
const express = require("express");
const { SSOServerServiceClientImpl } = require("./authService.js");
const { Account } = require("./account.js");

const client = http2.connect("http://92.53.105.243:81");
const app = express();
const port = 3000;

class GrpcWebRpc {
  constructor(client) {
    this.client = client;
  }

  request(service, method, data) {
    return new Promise((resolve, reject) => {
      const req = this.client.request({
        ":method": "POST",
        ":path": `/${service}/${method}`,
        "content-type": "application/grpc-web+proto",
      });

      const chunks = [];
      req.on("data", (chunk) => {
        chunks.push(chunk);
      });

      req.on("end", () => {
        resolve(Buffer.concat(chunks));
      });

      req.on("error", (err) => {
        reject(err);
      });

      req.write(data);
      req.end();
    });
  }
}

const rpc = new GrpcWebRpc(client);
const ssoClient = new SSOServerServiceClientImpl(rpc);

const request = {
	email: { email: "viktor.rak05@gmail.com" },
	password: { password: "ShadowFixend123!" },
	isCompany: false,
  };
  

  async function signUp() {
	console.log("Sending request:", request);
	try {
	  const response = await ssoClient.SignUp(request);
	  console.log("Raw Response:", response);
	  return response;
	} catch (err) {
	  console.error("Error during gRPC call:", err);
	  return { error: err.message };
	}
  }

app.post("/signup", async (req, res) => {
  const response = await signUp();
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

module.exports = { signUp };

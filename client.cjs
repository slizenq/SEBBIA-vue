const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const express = require("express");

const PROTO_PATH = "assets/proto/auth/authService.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  	keepCase: true,
  	longs: String,
  	enums: String,
  	defaults: true,
  	oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition).pb;
const app = express();
const port = 3000;
const client = new proto.SSOServerService("92.53.105.243:81", grpc.credentials.createInsecure());

app.use(express.json());

// Register
async function signUp(accountData) {
	return new Promise((resolve, reject) => {
		client.SignUp(accountData, (err, response) => {
		if (err) {
			console.error("gRPC error:", err);
			reject(err);
		} else {
			console.log("Response from gRPC:", response);
			resolve(response);
		}
		});
	});
}
app.post("/signup", async (req, res) => {
	const accountData = {
		email: { email: req.body.email },
		password: { password: req.body.password },
		isCompany: req.body.isCompany,
	};
	try {
		const response = await signUp(accountData);
		res.json(response);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});
// Login
async function Login(loginData) {
	return new Promise((resolve, reject) => {
		client.Login(loginData, (err, response) => {
		if (err) {
			console.error("gRPC error:", err);
			reject(err);
		} else {
			console.log("Response from gRPC:", response);
			resolve(response);
		}
		});
	});
}

app.post("/login", async (req, res) => {
	const loginData = {
		email: {email: req.body.email},
		password: {password: req.body.password},
	};
	console.log(loginData);
	
	try {
		const response = await Login(loginData);
		res.json(response);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});
app.listen(port, () => {
  	console.log(`Server listening on http://localhost:${port}`);
});
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const express = require("express");

const PROTO_PATH = [
    "assets/proto/auth/authService.proto",
    "assets/proto/student/student.proto",
    "assets/proto/applicationVacancy/applicationVacancy.proto",
    "assets/proto/company/companyService.proto",
    "assets/proto/resume/resume.proto",
    "assets/proto/vacancy/vacancy.proto",
];
const authProto = protoLoader.loadSync(PROTO_PATH[0], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const studentProto = protoLoader.loadSync(PROTO_PATH[1], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const applicationVacancy = protoLoader.loadSync(PROTO_PATH[2], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const company = protoLoader.loadSync(PROTO_PATH[3], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const resume = protoLoader.loadSync(PROTO_PATH[4], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const vacancy = protoLoader.loadSync(PROTO_PATH[5], {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const authPackage = grpc.loadPackageDefinition(authProto).pb;
const studentPackage = grpc.loadPackageDefinition(studentProto).student;
const applicationVacancyPakage = grpc.loadPackageDefinition(applicationVacancy).pb;
const companyPackage = grpc.loadPackageDefinition(company).company;
const resumePackage = grpc.loadPackageDefinition(resume).resume;
const vacancyPackage = grpc.loadPackageDefinition(vacancy).vacancy;

const app = express();
const port = 3000;
app.use(express.json());

function createAuthClient() {
    return new authPackage.SSOServerService("92.53.105.243:81", grpc.credentials.createInsecure());
}
function createStudentClient() {
    return new studentPackage.StudentService("92.53.105.243:81", grpc.credentials.createInsecure());
}
function createApplicationVacancyClient() {
    return new applicationVacancyPakage.ApplicationVacancyService("92.53.105.243:81", grpc.credentials.createInsecure());
}
function createCompanyClient() {
    return new companyPackage.CompanyService("92.53.105.243:81", grpc.credentials.createInsecure());
}
function createResumeClient() {
    return new resumePackage.ResumeService("92.53.105.243:81", grpc.credentials.createInsecure());
}
function createVacancyClient() {
    return new vacancyPackage.VacancyService("92.53.105.243:81", grpc.credentials.createInsecure());
}

// Регистрация 
async function signUp(accountData) {
    const client = createAuthClient();
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
// Авторизация
async function login(loginData) {
    const client = createAuthClient();
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
        email: { email: req.body.email },
        password: { password: req.body.password },
    };
    console.log(loginData);
    
    try {
        const response = await login(loginData);
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Получение аккаунта по токену
async function getStudentByToken(tokenData) {
    const client = createStudentClient();
    return new Promise((resolve, reject) => {
        client.GetStudentByToken(tokenData, (err, response) => {
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
// getStudentByToken()
app.post("/GetStudentByToken", async (req, res) => {
    const tokenData = {
        token: req.body.token,  
    };
    try {
        const response = await getStudentByToken(tokenData);
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

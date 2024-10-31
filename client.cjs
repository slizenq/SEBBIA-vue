const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const express = require("express");

const options = {
    'grpc.max_receive_message_length': 2147483648, 
    'grpc.max_send_message_length': 2147483648      
};
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
const metadata = new grpc.Metadata();
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
    return new authPackage.SSOServerService("92.53.105.243:81", grpc.credentials.createInsecure(), options);
}
function createStudentClient() {
    return new studentPackage.StudentService("92.53.105.243:81", grpc.credentials.createInsecure(), options);
}
function createApplicationVacancyClient() {
    return new applicationVacancyPakage.ApplicationVacancyService("92.53.105.243:81", grpc.credentials.createInsecure(), options);
}
function createCompanyClient() {
    return new companyPackage.CompanyService("92.53.105.243:81", grpc.credentials.createInsecure(), options);
}
function createResumeClient() {
    return new resumePackage.ResumeService("92.53.105.243:81", grpc.credentials.createInsecure(), options);
}
function createVacancyClient() {
    return new vacancyPackage.VacancyService("92.53.105.243:81", grpc.credentials.createInsecure(), options);
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
// Получение студента по id
async function getStudentById(studentId) {
    const client = createStudentClient();
    // metadata.add('Authorization', `Bearer ${yourToken}`);
    const request = { studentId };
    return new Promise((resolve, reject) => {
        client.GetStudentByID(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student); 
            }
        });
    });
}
app.post("/getStudentById", async (req, res) => {
    const { studentId } = req.body;
    try {
        const student = await getStudentById(studentId);
        res.json(student);
		console.log(student);
		console.log(getStudentById);
		
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Получение студента по token
async function getStudentByToken(studentToken) {
    const client = createStudentClient();
    metadata.set("Authorization", `Bearer ${studentToken}`);
    
    const request = { studentToken };
    return new Promise((resolve, reject) => {
        client.GetStudentByToken(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student);
            }
        });
    });
}
app.post("/getStudentByToken", async (req, res) => {
    const studentToken = req.body.checkUUid;
    try {
        let studentTokenLog = await getStudentByToken(studentToken);
        res.json(studentTokenLog);
        console.log(studentTokenLog);
    } catch (err) { res.status(500).json({ error: err.message }) }
});
// Создание студента
async function createStudent(token, studentData) {
    const client = createStudentClient();
    const metadata = new grpc.Metadata();
    metadata.add('Authorization', `Bearer ${token}`);
    const request = {
        student: {
            FirstName: studentData.first_name,
            MiddleName: studentData.middle_name,
            LastName: studentData.last_name,
            BornDate: studentData.born_date,
            Education: studentData.education,
            Location: studentData.location,
            PhotoURL: studentData.photo_url,
            AccountID: studentData.account_id
        }
    };
    return new Promise((resolve, reject) => {
        client.CreateStudent(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message); 
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student);
            }
        })
    });
}
app.post("/createStudent", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const studentData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    try {
        const student = await createStudent(token, studentData);
        res.json(student);
    } catch (err) {
        console.error("Error in /createStudent:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Получение компании по id
async function createCompany(studentId) {
    const client = createCompanyClient();
    // metadata.add('Authorization', `Bearer ${yourToken}`);
    const request = { studentId };
    return new Promise((resolve, reject) => {
        client.CreateCompany(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student); 
            }
        });
    });
}
app.post("/CreateCompany", async (req, res) => {
    const { studentId } = req.body;
    try {
        const student = await createCompany(studentId);
        res.json(student);
		
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Создание компании
async function CreateCompany(studentId) {
    const client = createCompanyClient();
    const request = { studentId };
    return new Promise((resolve, reject) => {
        client.CreateCompany(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.student); 
            }
        });
    });
}
app.post("/CreateCompany", async (req, res) => {
    const { studentId } = req.body;
    try {
        const student = await CreateCompany(studentId);
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

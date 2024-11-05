const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const express = require("express");
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

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
// Создание профиля студента
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
// Редактирование профиля студента
async function updateStudent(token, studentData) {
    const client = createStudentClient();
    const metadata = new grpc.Metadata();
    metadata.add('Authorization', `Bearer ${token}`);
    if (!studentData.student_id) {
        throw new Error("student_id is missing for update request");
    }
    const request = {
        studentId: studentData.student_id,
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
        client.UpdateStudent(request, metadata, (err, response) => {
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
app.post("/updateStudent", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const studentData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    if (!studentData.student_id) {
        return res.status(400).json({ error: "student_id is required for update" });
    }
    try {
        if (!studentData.student_id) {
            return res.status(400).json({ error: "student_id is required for update" });
        }
        const student = await updateStudent(token, studentData);
        res.json(student);
    } catch (err) {
        console.error("Error in /updateStudent:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Создание резюме студента
async function createResumeStudent(token, studentData) {
    const client = createResumeClient();
    const metadata = new grpc.Metadata();
    metadata.add('Authorization', `Bearer ${token}`);
    const request = {
        aboutMe: studentData.about_me,
        skills: studentData.skills.map(skill => ({ skill })),   
        direction: studentData.direction,
        aboutProjects: studentData.about_projects,
        portfolio: studentData.portfolio,
    };
    return new Promise((resolve, reject) => {
        client.CreateResume(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message); 
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.resume);
            }
        })
    });
}
app.post("/createResumeStudent", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const studentData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    try {
        const resume = await createResumeStudent(token, studentData);
        res.json(resume);
    } catch (err) {
        console.error("Error in /createResumeStudent:", err.message);
        res.status(500).json({ error: err.message });
    }
});







// Создание профиля компании
const toTimestamp = (date) => {
    const seconds = Math.floor(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000; 
    return { seconds, nanos }; 
};

async function createCompany(token, companyData) {
    const client = createCompanyClient();   
    const metadata = new grpc.Metadata();
    metadata.add('Authorization', `Bearer ${token}`);
    
    const foundationDate = companyData.foundationDate ? toTimestamp(new Date(companyData.foundationDate)) : null;  
    const photo = companyData.photo && companyData.photo.data
        ? { data: companyData.photo.data, fileName: companyData.photo.fileName || "default.png" }
        : null;
        
    const request = {
        title: companyData.title,
        location: companyData.location,
        typeCompany: companyData.typeCompany,
        foundationDate: foundationDate, 
        aboutCompany: companyData.aboutCompany,
        photo: photo,
        contracts: companyData.contracts || []
    };

    return new Promise((resolve, reject) => {
        client.CreateCompany(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message); 
                reject(err);
            } else {
                console.log("Response from gRPC:", JSON.stringify(response, null, 2));
                resolve(response);
            }
        });
    });
}
app.post("/createCompany", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const companyData = req.body;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    try {
        const company = await createCompany(token, companyData);
        res.json(company);
    } catch (err) {
        console.error("Error in /createCompany:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Получение компании по token
async function getCompanyByAccessToken(companyToken) {
    const client = createCompanyClient();
    metadata.set("Authorization", `Bearer ${companyToken}`);
    
    const request = { companyToken };
    return new Promise((resolve, reject) => {
        client.GetCompanyByAccessToken(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err);
                reject(err);
            } else {
                if (response) {
                    console.log("Response from gRPC:", response);
                    resolve(response);
                } else {
                    console.error("gRPC returned no response");
                    reject(new Error("gRPC returned no response"));
                }
            }
        });
    });
}
app.post("/getCompanyByAccessToken", async (req, res) => {
    const companyToken = req.body.checkUUid;
    try {
        let companyTokenLog = await getCompanyByAccessToken(companyToken);
        res.json(companyTokenLog);
        console.log(companyTokenLog);
    } catch (err) { res.status(500).json({ error: err.message }) }
});
// Создание вакансии
async function createVacancy(token, vacancyData) {
    const client = createVacancyClient();
    const metadata = new grpc.Metadata();
    metadata.add('Authorization', `Bearer ${token}`);
    const expectedSkills = Array.isArray(vacancyData.expected_skills) 
        ? vacancyData.expected_skills.map(skill => ({ skill })) 
        : [];

    const directions = Array.isArray(vacancyData.directions) 
        ? vacancyData.directions.map(direction => ({ direction })) 
        : [];

    const request = {
        vacancy: {
            expected_skills: expectedSkills,
            about_practice: vacancyData.about_practice || '', 
            directions: directions,
            about_projects: vacancyData.about_projects || '',  
            company_id: vacancyData.company_id || '' 
        }
    };

    return new Promise((resolve, reject) => {
        client.CreateVacancy(request, metadata, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message);
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response);
            }
        });
    });
}
app.post("/createVacancy", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    const vacancyData = req.body;

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    try {
        const vacancy = await createVacancy(token, vacancyData);
        res.json(vacancy);
    } catch (err) {
        console.error("Error in /createVacancy:", err.message);
        res.status(500).json({ error: err.message });
    }
});







// Получение всех вакансий 
async function searchCompany(getVacancy) {
    const client = createCompanyClient();
    const request = {
        // title: getVacancy.title,
        aboutMe: getVacancy.about_me || "",
        skills: getVacancy.skills || "",
        direction: getVacancy.direction || "",
        aboutProjects: getVacancy.about_projects || "",
        portfolio: getVacancy.portfolio || "",
        page_size: getVacancy.page_size || 10,
        page_token: getVacancy.page_token || "", 
    };
    return new Promise((resolve, reject) => {
        client.SearchCompany(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message); 
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.company);  
            }
        });
    });
}

app.post("/searchCompany", async (req, res) => {
    const getVacancy = req.body;
    try {
        const resume = await searchCompany(getVacancy);
        res.json(resume);
    } catch (err) {
        console.error("Error in /searchCompany:", err.message);
        res.status(500).json({ error: err.message });
    }
});
// Получение вакансий по фильтру
async function getCompaniesByFilters(filterParams) {
    const client = createCompanyClient();
    const request = {
        typeCompany: filterParams.typeCompany,
        location: filterParams.location,
        contracts: filterParams.contracts || [],
        page_size: filterParams.page_size || 10, 
        page_token: filterParams.page_token || "", 
    };
    
    return new Promise((resolve, reject) => {
        client.GetCompaniesByFilters(request, (err, response) => {
            if (err) {
                console.error("gRPC error:", err.details || err.message); 
                reject(err);
            } else {
                console.log("Response from gRPC:", response);
                resolve(response.company);  
            }
        });
    });
}
app.post("/getCompaniesByFilters", async (req, res) => {
    const filterParams = req.body;
    try {
        const companies = await getCompaniesByFilters(filterParams);
        res.json(companies);
    } catch (err) {
        console.error("Error in /getCompaniesByFilters:", err.message);
        res.status(500).json({ error: err.message });
    }
});






app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

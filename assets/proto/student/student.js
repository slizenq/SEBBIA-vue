"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.4
//   protoc               v5.28.2
// source: assets/proto/student/student.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentServiceClientImpl = exports.StudentServiceServiceName = exports.GetStudentByTokenRequest = exports.TokenExistsResponse = exports.TokenExistsRequest = exports.ListStudentsResponse = exports.ListStudentsRequest = exports.GetStudentByIDResponse = exports.GetStudentByIDRequest = exports.StudentUpdateRequest = exports.StudentCreateUpdateResponse = exports.StudentCreateRequest = exports.Student = exports.Skill = exports.protobufPackage = void 0;
/* eslint-disable */
var wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "student";
function createBaseSkill() {
    return { name: "", level: "" };
}
exports.Skill = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.level !== "") {
            writer.uint32(18).string(message.level);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSkill();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.level = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            level: isSet(object.level) ? globalThis.String(object.level) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.level !== "") {
            obj.level = message.level;
        }
        return obj;
    },
    create: function (base) {
        return exports.Skill.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSkill();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.level = (_b = object.level) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStudent() {
    return {
        FirstName: "",
        MiddleName: "",
        LastName: "",
        BornDate: "",
        Education: "",
        Location: "",
        PhotoURL: "",
        Photo: new Uint8Array(0),
        AccountID: "",
    };
}
exports.Student = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.FirstName !== "") {
            writer.uint32(18).string(message.FirstName);
        }
        if (message.MiddleName !== "") {
            writer.uint32(26).string(message.MiddleName);
        }
        if (message.LastName !== "") {
            writer.uint32(34).string(message.LastName);
        }
        if (message.BornDate !== "") {
            writer.uint32(42).string(message.BornDate);
        }
        if (message.Education !== "") {
            writer.uint32(50).string(message.Education);
        }
        if (message.Location !== "") {
            writer.uint32(58).string(message.Location);
        }
        if (message.PhotoURL !== "") {
            writer.uint32(66).string(message.PhotoURL);
        }
        if (message.Photo.length !== 0) {
            writer.uint32(74).bytes(message.Photo);
        }
        if (message.AccountID !== "") {
            writer.uint32(82).string(message.AccountID);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStudent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.FirstName = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.MiddleName = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.LastName = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.BornDate = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.Education = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.Location = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.PhotoURL = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.Photo = reader.bytes();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.AccountID = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            FirstName: isSet(object.FirstName) ? globalThis.String(object.FirstName) : "",
            MiddleName: isSet(object.MiddleName) ? globalThis.String(object.MiddleName) : "",
            LastName: isSet(object.LastName) ? globalThis.String(object.LastName) : "",
            BornDate: isSet(object.BornDate) ? globalThis.String(object.BornDate) : "",
            Education: isSet(object.Education) ? globalThis.String(object.Education) : "",
            Location: isSet(object.Location) ? globalThis.String(object.Location) : "",
            PhotoURL: isSet(object.PhotoURL) ? globalThis.String(object.PhotoURL) : "",
            Photo: isSet(object.Photo) ? bytesFromBase64(object.Photo) : new Uint8Array(0),
            AccountID: isSet(object.AccountID) ? globalThis.String(object.AccountID) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.FirstName !== "") {
            obj.FirstName = message.FirstName;
        }
        if (message.MiddleName !== "") {
            obj.MiddleName = message.MiddleName;
        }
        if (message.LastName !== "") {
            obj.LastName = message.LastName;
        }
        if (message.BornDate !== "") {
            obj.BornDate = message.BornDate;
        }
        if (message.Education !== "") {
            obj.Education = message.Education;
        }
        if (message.Location !== "") {
            obj.Location = message.Location;
        }
        if (message.PhotoURL !== "") {
            obj.PhotoURL = message.PhotoURL;
        }
        if (message.Photo.length !== 0) {
            obj.Photo = base64FromBytes(message.Photo);
        }
        if (message.AccountID !== "") {
            obj.AccountID = message.AccountID;
        }
        return obj;
    },
    create: function (base) {
        return exports.Student.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseStudent();
        message.FirstName = (_a = object.FirstName) !== null && _a !== void 0 ? _a : "";
        message.MiddleName = (_b = object.MiddleName) !== null && _b !== void 0 ? _b : "";
        message.LastName = (_c = object.LastName) !== null && _c !== void 0 ? _c : "";
        message.BornDate = (_d = object.BornDate) !== null && _d !== void 0 ? _d : "";
        message.Education = (_e = object.Education) !== null && _e !== void 0 ? _e : "";
        message.Location = (_f = object.Location) !== null && _f !== void 0 ? _f : "";
        message.PhotoURL = (_g = object.PhotoURL) !== null && _g !== void 0 ? _g : "";
        message.Photo = (_h = object.Photo) !== null && _h !== void 0 ? _h : new Uint8Array(0);
        message.AccountID = (_j = object.AccountID) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseStudentCreateRequest() {
    return { student: undefined };
}
exports.StudentCreateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.student !== undefined) {
            exports.Student.encode(message.student, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStudentCreateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.student = exports.Student.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { student: isSet(object.student) ? exports.Student.fromJSON(object.student) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.student !== undefined) {
            obj.student = exports.Student.toJSON(message.student);
        }
        return obj;
    },
    create: function (base) {
        return exports.StudentCreateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseStudentCreateRequest();
        message.student = (object.student !== undefined && object.student !== null)
            ? exports.Student.fromPartial(object.student)
            : undefined;
        return message;
    },
};
function createBaseStudentCreateUpdateResponse() {
    return { id: "", message: "", student: undefined };
}
exports.StudentCreateUpdateResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.student !== undefined) {
            exports.Student.encode(message.student, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStudentCreateUpdateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.student = exports.Student.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            student: isSet(object.student) ? exports.Student.fromJSON(object.student) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.student !== undefined) {
            obj.student = exports.Student.toJSON(message.student);
        }
        return obj;
    },
    create: function (base) {
        return exports.StudentCreateUpdateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStudentCreateUpdateResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.student = (object.student !== undefined && object.student !== null)
            ? exports.Student.fromPartial(object.student)
            : undefined;
        return message;
    },
};
function createBaseStudentUpdateRequest() {
    return { studentId: "", student: undefined };
}
exports.StudentUpdateRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.studentId !== "") {
            writer.uint32(10).string(message.studentId);
        }
        if (message.student !== undefined) {
            exports.Student.encode(message.student, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStudentUpdateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.studentId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.student = exports.Student.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            studentId: isSet(object.studentId) ? globalThis.String(object.studentId) : "",
            student: isSet(object.student) ? exports.Student.fromJSON(object.student) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.studentId !== "") {
            obj.studentId = message.studentId;
        }
        if (message.student !== undefined) {
            obj.student = exports.Student.toJSON(message.student);
        }
        return obj;
    },
    create: function (base) {
        return exports.StudentUpdateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseStudentUpdateRequest();
        message.studentId = (_a = object.studentId) !== null && _a !== void 0 ? _a : "";
        message.student = (object.student !== undefined && object.student !== null)
            ? exports.Student.fromPartial(object.student)
            : undefined;
        return message;
    },
};
function createBaseGetStudentByIDRequest() {
    return { studentId: "" };
}
exports.GetStudentByIDRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.studentId !== "") {
            writer.uint32(10).string(message.studentId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetStudentByIDRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.studentId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { studentId: isSet(object.studentId) ? globalThis.String(object.studentId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.studentId !== "") {
            obj.studentId = message.studentId;
        }
        return obj;
    },
    create: function (base) {
        return exports.GetStudentByIDRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetStudentByIDRequest();
        message.studentId = (_a = object.studentId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetStudentByIDResponse() {
    return { student: undefined };
}
exports.GetStudentByIDResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.student !== undefined) {
            exports.Student.encode(message.student, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetStudentByIDResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.student = exports.Student.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { student: isSet(object.student) ? exports.Student.fromJSON(object.student) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.student !== undefined) {
            obj.student = exports.Student.toJSON(message.student);
        }
        return obj;
    },
    create: function (base) {
        return exports.GetStudentByIDResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetStudentByIDResponse();
        message.student = (object.student !== undefined && object.student !== null)
            ? exports.Student.fromPartial(object.student)
            : undefined;
        return message;
    },
};
function createBaseListStudentsRequest() {
    return {};
}
exports.ListStudentsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListStudentsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.ListStudentsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseListStudentsRequest();
        return message;
    },
};
function createBaseListStudentsResponse() {
    return { students: [] };
}
exports.ListStudentsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        for (var _i = 0, _a = message.students; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Student.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListStudentsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.students.push(exports.Student.decode(reader, reader.uint32()));
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            students: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.students) ? object.students.map(function (e) { return exports.Student.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var _a;
        var obj = {};
        if ((_a = message.students) === null || _a === void 0 ? void 0 : _a.length) {
            obj.students = message.students.map(function (e) { return exports.Student.toJSON(e); });
        }
        return obj;
    },
    create: function (base) {
        return exports.ListStudentsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListStudentsResponse();
        message.students = ((_a = object.students) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Student.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseTokenExistsRequest() {
    return { subjectId: "" };
}
exports.TokenExistsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.subjectId !== "") {
            writer.uint32(10).string(message.subjectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTokenExistsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.subjectId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { subjectId: isSet(object.subjectId) ? globalThis.String(object.subjectId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.subjectId !== "") {
            obj.subjectId = message.subjectId;
        }
        return obj;
    },
    create: function (base) {
        return exports.TokenExistsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTokenExistsRequest();
        message.subjectId = (_a = object.subjectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTokenExistsResponse() {
    return { exists: false };
}
exports.TokenExistsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        if (message.exists !== false) {
            writer.uint32(8).bool(message.exists);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTokenExistsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.exists = reader.bool();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { exists: isSet(object.exists) ? globalThis.Boolean(object.exists) : false };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.exists !== false) {
            obj.exists = message.exists;
        }
        return obj;
    },
    create: function (base) {
        return exports.TokenExistsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTokenExistsResponse();
        message.exists = (_a = object.exists) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseGetStudentByTokenRequest() {
    return {};
}
exports.GetStudentByTokenRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = new wire_1.BinaryWriter(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetStudentByTokenRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    create: function (base) {
        return exports.GetStudentByTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (_) {
        var message = createBaseGetStudentByTokenRequest();
        return message;
    },
};
exports.StudentServiceServiceName = "student.StudentService";
var StudentServiceClientImpl = /** @class */ (function () {
    function StudentServiceClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || exports.StudentServiceServiceName;
        this.rpc = rpc;
        this.CreateStudent = this.CreateStudent.bind(this);
        this.UpdateStudent = this.UpdateStudent.bind(this);
        this.GetStudentByID = this.GetStudentByID.bind(this);
        this.GetStudentByToken = this.GetStudentByToken.bind(this);
        this.ListStudents = this.ListStudents.bind(this);
        this.TokenExists = this.TokenExists.bind(this);
    }
    StudentServiceClientImpl.prototype.CreateStudent = function (request) {
        var data = exports.StudentCreateRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "CreateStudent", data);
        return promise.then(function (data) { return exports.StudentCreateUpdateResponse.decode(new wire_1.BinaryReader(data)); });
    };
    StudentServiceClientImpl.prototype.UpdateStudent = function (request) {
        var data = exports.StudentUpdateRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateStudent", data);
        return promise.then(function (data) { return exports.StudentCreateUpdateResponse.decode(new wire_1.BinaryReader(data)); });
    };
    StudentServiceClientImpl.prototype.GetStudentByID = function (request) {
        var data = exports.GetStudentByIDRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetStudentByID", data);
        return promise.then(function (data) { return exports.GetStudentByIDResponse.decode(new wire_1.BinaryReader(data)); });
    };
    StudentServiceClientImpl.prototype.GetStudentByToken = function (request) {
        var data = exports.GetStudentByTokenRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "GetStudentByToken", data);
        return promise.then(function (data) { return exports.StudentCreateUpdateResponse.decode(new wire_1.BinaryReader(data)); });
    };
    StudentServiceClientImpl.prototype.ListStudents = function (request) {
        var data = exports.ListStudentsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "ListStudents", data);
        return promise.then(function (data) { return exports.ListStudentsResponse.decode(new wire_1.BinaryReader(data)); });
    };
    StudentServiceClientImpl.prototype.TokenExists = function (request) {
        var data = exports.TokenExistsRequest.encode(request).finish();
        var promise = this.rpc.request(this.service, "TokenExists", data);
        return promise.then(function (data) { return exports.TokenExistsResponse.decode(new wire_1.BinaryReader(data)); });
    };
    return StudentServiceClientImpl;
}());
exports.StudentServiceClientImpl = StudentServiceClientImpl;
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = globalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin_1.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
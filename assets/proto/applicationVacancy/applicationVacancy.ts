// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.4
//   protoc               v5.28.2
// source: assets/proto/applicationVacancy/applicationVacancy.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Empty } from "../../../google/protobuf/empty.js";

export const protobufPackage = "pb";

export enum ApplicationVacancyStatus {
  UNREVIEWED = 0,
  REVIEWED = 1,
  ACCEPTED = 2,
  REJECTED = 3,
  UNRECOGNIZED = -1,
}

export function applicationVacancyStatusFromJSON(object: any): ApplicationVacancyStatus {
  switch (object) {
    case 0:
    case "UNREVIEWED":
      return ApplicationVacancyStatus.UNREVIEWED;
    case 1:
    case "REVIEWED":
      return ApplicationVacancyStatus.REVIEWED;
    case 2:
    case "ACCEPTED":
      return ApplicationVacancyStatus.ACCEPTED;
    case 3:
    case "REJECTED":
      return ApplicationVacancyStatus.REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ApplicationVacancyStatus.UNRECOGNIZED;
  }
}

export function applicationVacancyStatusToJSON(object: ApplicationVacancyStatus): string {
  switch (object) {
    case ApplicationVacancyStatus.UNREVIEWED:
      return "UNREVIEWED";
    case ApplicationVacancyStatus.REVIEWED:
      return "REVIEWED";
    case ApplicationVacancyStatus.ACCEPTED:
      return "ACCEPTED";
    case ApplicationVacancyStatus.REJECTED:
      return "REJECTED";
    case ApplicationVacancyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ApplicationVacancy {
  Id: string;
  resumeId: string;
  vacancyId: string;
  status: ApplicationVacancyStatus;
}

export interface CreateApplicationVacancyReq {
  resumeId: string;
  vacancyId: string;
}

export interface CreateApplicationVacancyRes {
  applicationVacancyId: string;
}

export interface ReviewApplicationVacancyReq {
  applicationVacancyId: string;
}

export interface AcceptApplicationVacancyReq {
  applicationVacancyId: string;
}

export interface RejectApplicationVacancyReq {
  applicationVacancyId: string;
}

export interface GetApplicationsVacanciesReq {
}

export interface GetApplicationVacancyByIdReq {
  applicationVacancyId: string;
}

export interface GetApplicationVacancyByIdRes {
  applicationVacancy: ApplicationVacancy | undefined;
}

export interface GetApplicationsVacancyByVacancyIdReq {
  vacancyId: string;
}

export interface GetApplicationsVacancyByVacancyIdRes {
  applicationsVacancy: ApplicationVacancy[];
}

function createBaseApplicationVacancy(): ApplicationVacancy {
  return { Id: "", resumeId: "", vacancyId: "", status: 0 };
}

export const ApplicationVacancy: MessageFns<ApplicationVacancy> = {
  encode(message: ApplicationVacancy, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    if (message.resumeId !== "") {
      writer.uint32(18).string(message.resumeId);
    }
    if (message.vacancyId !== "") {
      writer.uint32(26).string(message.vacancyId);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ApplicationVacancy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApplicationVacancy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.Id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.resumeId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.vacancyId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
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

  fromJSON(object: any): ApplicationVacancy {
    return {
      Id: isSet(object.Id) ? globalThis.String(object.Id) : "",
      resumeId: isSet(object.resumeId) ? globalThis.String(object.resumeId) : "",
      vacancyId: isSet(object.vacancyId) ? globalThis.String(object.vacancyId) : "",
      status: isSet(object.status) ? applicationVacancyStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: ApplicationVacancy): unknown {
    const obj: any = {};
    if (message.Id !== "") {
      obj.Id = message.Id;
    }
    if (message.resumeId !== "") {
      obj.resumeId = message.resumeId;
    }
    if (message.vacancyId !== "") {
      obj.vacancyId = message.vacancyId;
    }
    if (message.status !== 0) {
      obj.status = applicationVacancyStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApplicationVacancy>, I>>(base?: I): ApplicationVacancy {
    return ApplicationVacancy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ApplicationVacancy>, I>>(object: I): ApplicationVacancy {
    const message = createBaseApplicationVacancy();
    message.Id = object.Id ?? "";
    message.resumeId = object.resumeId ?? "";
    message.vacancyId = object.vacancyId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseCreateApplicationVacancyReq(): CreateApplicationVacancyReq {
  return { resumeId: "", vacancyId: "" };
}

export const CreateApplicationVacancyReq: MessageFns<CreateApplicationVacancyReq> = {
  encode(message: CreateApplicationVacancyReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resumeId !== "") {
      writer.uint32(10).string(message.resumeId);
    }
    if (message.vacancyId !== "") {
      writer.uint32(18).string(message.vacancyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateApplicationVacancyReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApplicationVacancyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.resumeId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.vacancyId = reader.string();
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

  fromJSON(object: any): CreateApplicationVacancyReq {
    return {
      resumeId: isSet(object.resumeId) ? globalThis.String(object.resumeId) : "",
      vacancyId: isSet(object.vacancyId) ? globalThis.String(object.vacancyId) : "",
    };
  },

  toJSON(message: CreateApplicationVacancyReq): unknown {
    const obj: any = {};
    if (message.resumeId !== "") {
      obj.resumeId = message.resumeId;
    }
    if (message.vacancyId !== "") {
      obj.vacancyId = message.vacancyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateApplicationVacancyReq>, I>>(base?: I): CreateApplicationVacancyReq {
    return CreateApplicationVacancyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateApplicationVacancyReq>, I>>(object: I): CreateApplicationVacancyReq {
    const message = createBaseCreateApplicationVacancyReq();
    message.resumeId = object.resumeId ?? "";
    message.vacancyId = object.vacancyId ?? "";
    return message;
  },
};

function createBaseCreateApplicationVacancyRes(): CreateApplicationVacancyRes {
  return { applicationVacancyId: "" };
}

export const CreateApplicationVacancyRes: MessageFns<CreateApplicationVacancyRes> = {
  encode(message: CreateApplicationVacancyRes, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.applicationVacancyId !== "") {
      writer.uint32(10).string(message.applicationVacancyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateApplicationVacancyRes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateApplicationVacancyRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.applicationVacancyId = reader.string();
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

  fromJSON(object: any): CreateApplicationVacancyRes {
    return {
      applicationVacancyId: isSet(object.applicationVacancyId) ? globalThis.String(object.applicationVacancyId) : "",
    };
  },

  toJSON(message: CreateApplicationVacancyRes): unknown {
    const obj: any = {};
    if (message.applicationVacancyId !== "") {
      obj.applicationVacancyId = message.applicationVacancyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateApplicationVacancyRes>, I>>(base?: I): CreateApplicationVacancyRes {
    return CreateApplicationVacancyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateApplicationVacancyRes>, I>>(object: I): CreateApplicationVacancyRes {
    const message = createBaseCreateApplicationVacancyRes();
    message.applicationVacancyId = object.applicationVacancyId ?? "";
    return message;
  },
};

function createBaseReviewApplicationVacancyReq(): ReviewApplicationVacancyReq {
  return { applicationVacancyId: "" };
}

export const ReviewApplicationVacancyReq: MessageFns<ReviewApplicationVacancyReq> = {
  encode(message: ReviewApplicationVacancyReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.applicationVacancyId !== "") {
      writer.uint32(10).string(message.applicationVacancyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ReviewApplicationVacancyReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReviewApplicationVacancyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.applicationVacancyId = reader.string();
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

  fromJSON(object: any): ReviewApplicationVacancyReq {
    return {
      applicationVacancyId: isSet(object.applicationVacancyId) ? globalThis.String(object.applicationVacancyId) : "",
    };
  },

  toJSON(message: ReviewApplicationVacancyReq): unknown {
    const obj: any = {};
    if (message.applicationVacancyId !== "") {
      obj.applicationVacancyId = message.applicationVacancyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReviewApplicationVacancyReq>, I>>(base?: I): ReviewApplicationVacancyReq {
    return ReviewApplicationVacancyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReviewApplicationVacancyReq>, I>>(object: I): ReviewApplicationVacancyReq {
    const message = createBaseReviewApplicationVacancyReq();
    message.applicationVacancyId = object.applicationVacancyId ?? "";
    return message;
  },
};

function createBaseAcceptApplicationVacancyReq(): AcceptApplicationVacancyReq {
  return { applicationVacancyId: "" };
}

export const AcceptApplicationVacancyReq: MessageFns<AcceptApplicationVacancyReq> = {
  encode(message: AcceptApplicationVacancyReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.applicationVacancyId !== "") {
      writer.uint32(10).string(message.applicationVacancyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AcceptApplicationVacancyReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptApplicationVacancyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.applicationVacancyId = reader.string();
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

  fromJSON(object: any): AcceptApplicationVacancyReq {
    return {
      applicationVacancyId: isSet(object.applicationVacancyId) ? globalThis.String(object.applicationVacancyId) : "",
    };
  },

  toJSON(message: AcceptApplicationVacancyReq): unknown {
    const obj: any = {};
    if (message.applicationVacancyId !== "") {
      obj.applicationVacancyId = message.applicationVacancyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcceptApplicationVacancyReq>, I>>(base?: I): AcceptApplicationVacancyReq {
    return AcceptApplicationVacancyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AcceptApplicationVacancyReq>, I>>(object: I): AcceptApplicationVacancyReq {
    const message = createBaseAcceptApplicationVacancyReq();
    message.applicationVacancyId = object.applicationVacancyId ?? "";
    return message;
  },
};

function createBaseRejectApplicationVacancyReq(): RejectApplicationVacancyReq {
  return { applicationVacancyId: "" };
}

export const RejectApplicationVacancyReq: MessageFns<RejectApplicationVacancyReq> = {
  encode(message: RejectApplicationVacancyReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.applicationVacancyId !== "") {
      writer.uint32(10).string(message.applicationVacancyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RejectApplicationVacancyReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRejectApplicationVacancyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.applicationVacancyId = reader.string();
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

  fromJSON(object: any): RejectApplicationVacancyReq {
    return {
      applicationVacancyId: isSet(object.applicationVacancyId) ? globalThis.String(object.applicationVacancyId) : "",
    };
  },

  toJSON(message: RejectApplicationVacancyReq): unknown {
    const obj: any = {};
    if (message.applicationVacancyId !== "") {
      obj.applicationVacancyId = message.applicationVacancyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RejectApplicationVacancyReq>, I>>(base?: I): RejectApplicationVacancyReq {
    return RejectApplicationVacancyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RejectApplicationVacancyReq>, I>>(object: I): RejectApplicationVacancyReq {
    const message = createBaseRejectApplicationVacancyReq();
    message.applicationVacancyId = object.applicationVacancyId ?? "";
    return message;
  },
};

function createBaseGetApplicationsVacanciesReq(): GetApplicationsVacanciesReq {
  return {};
}

export const GetApplicationsVacanciesReq: MessageFns<GetApplicationsVacanciesReq> = {
  encode(_: GetApplicationsVacanciesReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetApplicationsVacanciesReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApplicationsVacanciesReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetApplicationsVacanciesReq {
    return {};
  },

  toJSON(_: GetApplicationsVacanciesReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetApplicationsVacanciesReq>, I>>(base?: I): GetApplicationsVacanciesReq {
    return GetApplicationsVacanciesReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetApplicationsVacanciesReq>, I>>(_: I): GetApplicationsVacanciesReq {
    const message = createBaseGetApplicationsVacanciesReq();
    return message;
  },
};

function createBaseGetApplicationVacancyByIdReq(): GetApplicationVacancyByIdReq {
  return { applicationVacancyId: "" };
}

export const GetApplicationVacancyByIdReq: MessageFns<GetApplicationVacancyByIdReq> = {
  encode(message: GetApplicationVacancyByIdReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.applicationVacancyId !== "") {
      writer.uint32(10).string(message.applicationVacancyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetApplicationVacancyByIdReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApplicationVacancyByIdReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.applicationVacancyId = reader.string();
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

  fromJSON(object: any): GetApplicationVacancyByIdReq {
    return {
      applicationVacancyId: isSet(object.applicationVacancyId) ? globalThis.String(object.applicationVacancyId) : "",
    };
  },

  toJSON(message: GetApplicationVacancyByIdReq): unknown {
    const obj: any = {};
    if (message.applicationVacancyId !== "") {
      obj.applicationVacancyId = message.applicationVacancyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetApplicationVacancyByIdReq>, I>>(base?: I): GetApplicationVacancyByIdReq {
    return GetApplicationVacancyByIdReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetApplicationVacancyByIdReq>, I>>(object: I): GetApplicationVacancyByIdReq {
    const message = createBaseGetApplicationVacancyByIdReq();
    message.applicationVacancyId = object.applicationVacancyId ?? "";
    return message;
  },
};

function createBaseGetApplicationVacancyByIdRes(): GetApplicationVacancyByIdRes {
  return { applicationVacancy: undefined };
}

export const GetApplicationVacancyByIdRes: MessageFns<GetApplicationVacancyByIdRes> = {
  encode(message: GetApplicationVacancyByIdRes, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.applicationVacancy !== undefined) {
      ApplicationVacancy.encode(message.applicationVacancy, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetApplicationVacancyByIdRes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApplicationVacancyByIdRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.applicationVacancy = ApplicationVacancy.decode(reader, reader.uint32());
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

  fromJSON(object: any): GetApplicationVacancyByIdRes {
    return {
      applicationVacancy: isSet(object.applicationVacancy)
        ? ApplicationVacancy.fromJSON(object.applicationVacancy)
        : undefined,
    };
  },

  toJSON(message: GetApplicationVacancyByIdRes): unknown {
    const obj: any = {};
    if (message.applicationVacancy !== undefined) {
      obj.applicationVacancy = ApplicationVacancy.toJSON(message.applicationVacancy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetApplicationVacancyByIdRes>, I>>(base?: I): GetApplicationVacancyByIdRes {
    return GetApplicationVacancyByIdRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetApplicationVacancyByIdRes>, I>>(object: I): GetApplicationVacancyByIdRes {
    const message = createBaseGetApplicationVacancyByIdRes();
    message.applicationVacancy = (object.applicationVacancy !== undefined && object.applicationVacancy !== null)
      ? ApplicationVacancy.fromPartial(object.applicationVacancy)
      : undefined;
    return message;
  },
};

function createBaseGetApplicationsVacancyByVacancyIdReq(): GetApplicationsVacancyByVacancyIdReq {
  return { vacancyId: "" };
}

export const GetApplicationsVacancyByVacancyIdReq: MessageFns<GetApplicationsVacancyByVacancyIdReq> = {
  encode(message: GetApplicationsVacancyByVacancyIdReq, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.vacancyId !== "") {
      writer.uint32(10).string(message.vacancyId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetApplicationsVacancyByVacancyIdReq {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApplicationsVacancyByVacancyIdReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.vacancyId = reader.string();
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

  fromJSON(object: any): GetApplicationsVacancyByVacancyIdReq {
    return { vacancyId: isSet(object.vacancyId) ? globalThis.String(object.vacancyId) : "" };
  },

  toJSON(message: GetApplicationsVacancyByVacancyIdReq): unknown {
    const obj: any = {};
    if (message.vacancyId !== "") {
      obj.vacancyId = message.vacancyId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetApplicationsVacancyByVacancyIdReq>, I>>(
    base?: I,
  ): GetApplicationsVacancyByVacancyIdReq {
    return GetApplicationsVacancyByVacancyIdReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetApplicationsVacancyByVacancyIdReq>, I>>(
    object: I,
  ): GetApplicationsVacancyByVacancyIdReq {
    const message = createBaseGetApplicationsVacancyByVacancyIdReq();
    message.vacancyId = object.vacancyId ?? "";
    return message;
  },
};

function createBaseGetApplicationsVacancyByVacancyIdRes(): GetApplicationsVacancyByVacancyIdRes {
  return { applicationsVacancy: [] };
}

export const GetApplicationsVacancyByVacancyIdRes: MessageFns<GetApplicationsVacancyByVacancyIdRes> = {
  encode(message: GetApplicationsVacancyByVacancyIdRes, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.applicationsVacancy) {
      ApplicationVacancy.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetApplicationsVacancyByVacancyIdRes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetApplicationsVacancyByVacancyIdRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.applicationsVacancy.push(ApplicationVacancy.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetApplicationsVacancyByVacancyIdRes {
    return {
      applicationsVacancy: globalThis.Array.isArray(object?.applicationsVacancy)
        ? object.applicationsVacancy.map((e: any) => ApplicationVacancy.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetApplicationsVacancyByVacancyIdRes): unknown {
    const obj: any = {};
    if (message.applicationsVacancy?.length) {
      obj.applicationsVacancy = message.applicationsVacancy.map((e) => ApplicationVacancy.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetApplicationsVacancyByVacancyIdRes>, I>>(
    base?: I,
  ): GetApplicationsVacancyByVacancyIdRes {
    return GetApplicationsVacancyByVacancyIdRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetApplicationsVacancyByVacancyIdRes>, I>>(
    object: I,
  ): GetApplicationsVacancyByVacancyIdRes {
    const message = createBaseGetApplicationsVacancyByVacancyIdRes();
    message.applicationsVacancy = object.applicationsVacancy?.map((e) => ApplicationVacancy.fromPartial(e)) || [];
    return message;
  },
};

export interface ApplicationVacancyService {
  CreateApplicationVacancy(request: CreateApplicationVacancyReq): Promise<CreateApplicationVacancyRes>;
  ReviewApplicationVacancy(request: ReviewApplicationVacancyReq): Promise<Empty>;
  AcceptApplicationVacancy(request: AcceptApplicationVacancyReq): Promise<Empty>;
  RejectApplicationVacancy(request: RejectApplicationVacancyReq): Promise<Empty>;
  GetApplicationVacancyById(request: GetApplicationVacancyByIdReq): Promise<GetApplicationVacancyByIdRes>;
  GetApplicationsVacancyByVacancyId(
    request: GetApplicationsVacancyByVacancyIdReq,
  ): Promise<GetApplicationsVacancyByVacancyIdRes>;
}

export const ApplicationVacancyServiceServiceName = "pb.ApplicationVacancyService";
export class ApplicationVacancyServiceClientImpl implements ApplicationVacancyService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ApplicationVacancyServiceServiceName;
    this.rpc = rpc;
    this.CreateApplicationVacancy = this.CreateApplicationVacancy.bind(this);
    this.ReviewApplicationVacancy = this.ReviewApplicationVacancy.bind(this);
    this.AcceptApplicationVacancy = this.AcceptApplicationVacancy.bind(this);
    this.RejectApplicationVacancy = this.RejectApplicationVacancy.bind(this);
    this.GetApplicationVacancyById = this.GetApplicationVacancyById.bind(this);
    this.GetApplicationsVacancyByVacancyId = this.GetApplicationsVacancyByVacancyId.bind(this);
  }
  CreateApplicationVacancy(request: CreateApplicationVacancyReq): Promise<CreateApplicationVacancyRes> {
    const data = CreateApplicationVacancyReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateApplicationVacancy", data);
    return promise.then((data) => CreateApplicationVacancyRes.decode(new BinaryReader(data)));
  }

  ReviewApplicationVacancy(request: ReviewApplicationVacancyReq): Promise<Empty> {
    const data = ReviewApplicationVacancyReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReviewApplicationVacancy", data);
    return promise.then((data) => Empty.decode(new BinaryReader(data)));
  }

  AcceptApplicationVacancy(request: AcceptApplicationVacancyReq): Promise<Empty> {
    const data = AcceptApplicationVacancyReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "AcceptApplicationVacancy", data);
    return promise.then((data) => Empty.decode(new BinaryReader(data)));
  }

  RejectApplicationVacancy(request: RejectApplicationVacancyReq): Promise<Empty> {
    const data = RejectApplicationVacancyReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "RejectApplicationVacancy", data);
    return promise.then((data) => Empty.decode(new BinaryReader(data)));
  }

  GetApplicationVacancyById(request: GetApplicationVacancyByIdReq): Promise<GetApplicationVacancyByIdRes> {
    const data = GetApplicationVacancyByIdReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetApplicationVacancyById", data);
    return promise.then((data) => GetApplicationVacancyByIdRes.decode(new BinaryReader(data)));
  }

  GetApplicationsVacancyByVacancyId(
    request: GetApplicationsVacancyByVacancyIdReq,
  ): Promise<GetApplicationsVacancyByVacancyIdRes> {
    const data = GetApplicationsVacancyByVacancyIdReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetApplicationsVacancyByVacancyId", data);
    return promise.then((data) => GetApplicationsVacancyByVacancyIdRes.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
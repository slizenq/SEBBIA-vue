// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.2
// source: company.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "./../../../google/protobuf/timestamp.js";

export const protobufPackage = "company";

export interface Photo {
  photo: Uint8Array;
  fileName: string;
}

export interface Company {
  title: string;
  foundationDate?: Date | undefined;
  aboutCompany?: string | undefined;
  photo?: Photo | undefined;
  typeCompany: string;
  accountId: string;
  location: string;
  contracts: string[];
}

export interface GetCompanyResponse {
  title?: string | undefined;
  foundationDate?: Date | undefined;
  aboutCompany?: string | undefined;
  photo?: string | undefined;
  typeCompany?: string | undefined;
  accountId?: string | undefined;
  location?: string | undefined;
  contracts: string[];
  id?: string | undefined;
}

function createBasePhoto(): Photo {
  return { photo: new Uint8Array(0), fileName: "" };
}

export const Photo: MessageFns<Photo> = {
  encode(message: Photo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.photo.length !== 0) {
      writer.uint32(10).bytes(message.photo);
    }
    if (message.fileName !== "") {
      writer.uint32(18).string(message.fileName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Photo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhoto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.photo = reader.bytes();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.fileName = reader.string();
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

  fromJSON(object: any): Photo {
    return {
      photo: isSet(object.photo) ? bytesFromBase64(object.photo) : new Uint8Array(0),
      fileName: isSet(object.fileName) ? globalThis.String(object.fileName) : "",
    };
  },

  toJSON(message: Photo): unknown {
    const obj: any = {};
    if (message.photo.length !== 0) {
      obj.photo = base64FromBytes(message.photo);
    }
    if (message.fileName !== "") {
      obj.fileName = message.fileName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Photo>, I>>(base?: I): Photo {
    return Photo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Photo>, I>>(object: I): Photo {
    const message = createBasePhoto();
    message.photo = object.photo ?? new Uint8Array(0);
    message.fileName = object.fileName ?? "";
    return message;
  },
};

function createBaseCompany(): Company {
  return {
    title: "",
    foundationDate: undefined,
    aboutCompany: undefined,
    photo: undefined,
    typeCompany: "",
    accountId: "",
    location: "",
    contracts: [],
  };
}

export const Company: MessageFns<Company> = {
  encode(message: Company, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.foundationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.foundationDate), writer.uint32(18).fork()).join();
    }
    if (message.aboutCompany !== undefined) {
      writer.uint32(26).string(message.aboutCompany);
    }
    if (message.photo !== undefined) {
      Photo.encode(message.photo, writer.uint32(34).fork()).join();
    }
    if (message.typeCompany !== "") {
      writer.uint32(42).string(message.typeCompany);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    if (message.location !== "") {
      writer.uint32(58).string(message.location);
    }
    for (const v of message.contracts) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Company {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompany();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.foundationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.aboutCompany = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.photo = Photo.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.typeCompany = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.location = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.contracts.push(reader.string());
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

  fromJSON(object: any): Company {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      foundationDate: isSet(object.foundationDate) ? fromJsonTimestamp(object.foundationDate) : undefined,
      aboutCompany: isSet(object.aboutCompany) ? globalThis.String(object.aboutCompany) : undefined,
      photo: isSet(object.photo) ? Photo.fromJSON(object.photo) : undefined,
      typeCompany: isSet(object.typeCompany) ? globalThis.String(object.typeCompany) : "",
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      contracts: globalThis.Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Company): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.foundationDate !== undefined) {
      obj.foundationDate = message.foundationDate.toISOString();
    }
    if (message.aboutCompany !== undefined) {
      obj.aboutCompany = message.aboutCompany;
    }
    if (message.photo !== undefined) {
      obj.photo = Photo.toJSON(message.photo);
    }
    if (message.typeCompany !== "") {
      obj.typeCompany = message.typeCompany;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.contracts?.length) {
      obj.contracts = message.contracts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Company>, I>>(base?: I): Company {
    return Company.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Company>, I>>(object: I): Company {
    const message = createBaseCompany();
    message.title = object.title ?? "";
    message.foundationDate = object.foundationDate ?? undefined;
    message.aboutCompany = object.aboutCompany ?? undefined;
    message.photo = (object.photo !== undefined && object.photo !== null) ? Photo.fromPartial(object.photo) : undefined;
    message.typeCompany = object.typeCompany ?? "";
    message.accountId = object.accountId ?? "";
    message.location = object.location ?? "";
    message.contracts = object.contracts?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetCompanyResponse(): GetCompanyResponse {
  return {
    title: undefined,
    foundationDate: undefined,
    aboutCompany: undefined,
    photo: undefined,
    typeCompany: undefined,
    accountId: undefined,
    location: undefined,
    contracts: [],
    id: undefined,
  };
}

export const GetCompanyResponse: MessageFns<GetCompanyResponse> = {
  encode(message: GetCompanyResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }
    if (message.foundationDate !== undefined) {
      Timestamp.encode(toTimestamp(message.foundationDate), writer.uint32(18).fork()).join();
    }
    if (message.aboutCompany !== undefined) {
      writer.uint32(26).string(message.aboutCompany);
    }
    if (message.photo !== undefined) {
      writer.uint32(34).string(message.photo);
    }
    if (message.typeCompany !== undefined) {
      writer.uint32(42).string(message.typeCompany);
    }
    if (message.accountId !== undefined) {
      writer.uint32(50).string(message.accountId);
    }
    if (message.location !== undefined) {
      writer.uint32(58).string(message.location);
    }
    for (const v of message.contracts) {
      writer.uint32(66).string(v!);
    }
    if (message.id !== undefined) {
      writer.uint32(74).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetCompanyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCompanyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.foundationDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.aboutCompany = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.photo = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.typeCompany = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.location = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.contracts.push(reader.string());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.id = reader.string();
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

  fromJSON(object: any): GetCompanyResponse {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : undefined,
      foundationDate: isSet(object.foundationDate) ? fromJsonTimestamp(object.foundationDate) : undefined,
      aboutCompany: isSet(object.aboutCompany) ? globalThis.String(object.aboutCompany) : undefined,
      photo: isSet(object.photo) ? globalThis.String(object.photo) : undefined,
      typeCompany: isSet(object.typeCompany) ? globalThis.String(object.typeCompany) : undefined,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : undefined,
      location: isSet(object.location) ? globalThis.String(object.location) : undefined,
      contracts: globalThis.Array.isArray(object?.contracts)
        ? object.contracts.map((e: any) => globalThis.String(e))
        : [],
      id: isSet(object.id) ? globalThis.String(object.id) : undefined,
    };
  },

  toJSON(message: GetCompanyResponse): unknown {
    const obj: any = {};
    if (message.title !== undefined) {
      obj.title = message.title;
    }
    if (message.foundationDate !== undefined) {
      obj.foundationDate = message.foundationDate.toISOString();
    }
    if (message.aboutCompany !== undefined) {
      obj.aboutCompany = message.aboutCompany;
    }
    if (message.photo !== undefined) {
      obj.photo = message.photo;
    }
    if (message.typeCompany !== undefined) {
      obj.typeCompany = message.typeCompany;
    }
    if (message.accountId !== undefined) {
      obj.accountId = message.accountId;
    }
    if (message.location !== undefined) {
      obj.location = message.location;
    }
    if (message.contracts?.length) {
      obj.contracts = message.contracts;
    }
    if (message.id !== undefined) {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCompanyResponse>, I>>(base?: I): GetCompanyResponse {
    return GetCompanyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetCompanyResponse>, I>>(object: I): GetCompanyResponse {
    const message = createBaseGetCompanyResponse();
    message.title = object.title ?? undefined;
    message.foundationDate = object.foundationDate ?? undefined;
    message.aboutCompany = object.aboutCompany ?? undefined;
    message.photo = object.photo ?? undefined;
    message.typeCompany = object.typeCompany ?? undefined;
    message.accountId = object.accountId ?? undefined;
    message.location = object.location ?? undefined;
    message.contracts = object.contracts?.map((e) => e) || [];
    message.id = object.id ?? undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
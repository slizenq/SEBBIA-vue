import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Photo extends jspb.Message {
  getPhoto(): Uint8Array | string;
  getPhoto_asU8(): Uint8Array;
  getPhoto_asB64(): string;
  setPhoto(value: Uint8Array | string): Photo;

  getFilename(): string;
  setFilename(value: string): Photo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Photo.AsObject;
  static toObject(includeInstance: boolean, msg: Photo): Photo.AsObject;
  static serializeBinaryToWriter(message: Photo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Photo;
  static deserializeBinaryFromReader(message: Photo, reader: jspb.BinaryReader): Photo;
}

export namespace Photo {
  export type AsObject = {
    photo: Uint8Array | string,
    filename: string,
  }
}

export class Company extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Company;

  getFoundationdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFoundationdate(value?: google_protobuf_timestamp_pb.Timestamp): Company;
  hasFoundationdate(): boolean;
  clearFoundationdate(): Company;

  getAboutcompany(): string;
  setAboutcompany(value: string): Company;
  hasAboutcompany(): boolean;
  clearAboutcompany(): Company;

  getPhoto(): Photo | undefined;
  setPhoto(value?: Photo): Company;
  hasPhoto(): boolean;
  clearPhoto(): Company;

  getTypecompany(): string;
  setTypecompany(value: string): Company;

  getAccountid(): string;
  setAccountid(value: string): Company;

  getLocation(): string;
  setLocation(value: string): Company;

  getContractsList(): Array<string>;
  setContractsList(value: Array<string>): Company;
  clearContractsList(): Company;
  addContracts(value: string, index?: number): Company;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    title: string,
    foundationdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    aboutcompany?: string,
    photo?: Photo.AsObject,
    typecompany: string,
    accountid: string,
    location: string,
    contractsList: Array<string>,
  }

  export enum FoundationdateCase { 
    _FOUNDATIONDATE_NOT_SET = 0,
    FOUNDATIONDATE = 2,
  }

  export enum AboutcompanyCase { 
    _ABOUTCOMPANY_NOT_SET = 0,
    ABOUTCOMPANY = 3,
  }

  export enum PhotoCase { 
    _PHOTO_NOT_SET = 0,
    PHOTO = 4,
  }
}

export class GetCompanyResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): GetCompanyResponse;

  getFoundationdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFoundationdate(value?: google_protobuf_timestamp_pb.Timestamp): GetCompanyResponse;
  hasFoundationdate(): boolean;
  clearFoundationdate(): GetCompanyResponse;

  getAboutcompany(): string;
  setAboutcompany(value: string): GetCompanyResponse;
  hasAboutcompany(): boolean;
  clearAboutcompany(): GetCompanyResponse;

  getPhoto(): string;
  setPhoto(value: string): GetCompanyResponse;
  hasPhoto(): boolean;
  clearPhoto(): GetCompanyResponse;

  getTypecompany(): string;
  setTypecompany(value: string): GetCompanyResponse;

  getAccountid(): string;
  setAccountid(value: string): GetCompanyResponse;

  getLocation(): string;
  setLocation(value: string): GetCompanyResponse;

  getContractsList(): Array<string>;
  setContractsList(value: Array<string>): GetCompanyResponse;
  clearContractsList(): GetCompanyResponse;
  addContracts(value: string, index?: number): GetCompanyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyResponse): GetCompanyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCompanyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyResponse;
  static deserializeBinaryFromReader(message: GetCompanyResponse, reader: jspb.BinaryReader): GetCompanyResponse;
}

export namespace GetCompanyResponse {
  export type AsObject = {
    title: string,
    foundationdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    aboutcompany?: string,
    photo?: string,
    typecompany: string,
    accountid: string,
    location: string,
    contractsList: Array<string>,
  }

  export enum FoundationdateCase { 
    _FOUNDATIONDATE_NOT_SET = 0,
    FOUNDATIONDATE = 2,
  }

  export enum AboutcompanyCase { 
    _ABOUTCOMPANY_NOT_SET = 0,
    ABOUTCOMPANY = 3,
  }

  export enum PhotoCase { 
    _PHOTO_NOT_SET = 0,
    PHOTO = 4,
  }
}


import * as jspb from 'google-protobuf'

import * as company_pb from './company_pb'; // proto import: "company.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class ChangeCompanyRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ChangeCompanyRequest;
  hasTitle(): boolean;
  clearTitle(): ChangeCompanyRequest;

  getFoundationdate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFoundationdate(value?: google_protobuf_timestamp_pb.Timestamp): ChangeCompanyRequest;
  hasFoundationdate(): boolean;
  clearFoundationdate(): ChangeCompanyRequest;

  getPhoto(): company_pb.Photo | undefined;
  setPhoto(value?: company_pb.Photo): ChangeCompanyRequest;
  hasPhoto(): boolean;
  clearPhoto(): ChangeCompanyRequest;

  getAboutcompany(): string;
  setAboutcompany(value: string): ChangeCompanyRequest;
  hasAboutcompany(): boolean;
  clearAboutcompany(): ChangeCompanyRequest;

  getTypecompany(): string;
  setTypecompany(value: string): ChangeCompanyRequest;
  hasTypecompany(): boolean;
  clearTypecompany(): ChangeCompanyRequest;

  getLocation(): string;
  setLocation(value: string): ChangeCompanyRequest;
  hasLocation(): boolean;
  clearLocation(): ChangeCompanyRequest;

  getContractsList(): Array<string>;
  setContractsList(value: Array<string>): ChangeCompanyRequest;
  clearContractsList(): ChangeCompanyRequest;
  addContracts(value: string, index?: number): ChangeCompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeCompanyRequest): ChangeCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeCompanyRequest;
  static deserializeBinaryFromReader(message: ChangeCompanyRequest, reader: jspb.BinaryReader): ChangeCompanyRequest;
}

export namespace ChangeCompanyRequest {
  export type AsObject = {
    title?: string,
    foundationdate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    photo?: company_pb.Photo.AsObject,
    aboutcompany?: string,
    typecompany?: string,
    location?: string,
    contractsList: Array<string>,
  }

  export enum TitleCase { 
    _TITLE_NOT_SET = 0,
    TITLE = 1,
  }

  export enum FoundationdateCase { 
    _FOUNDATIONDATE_NOT_SET = 0,
    FOUNDATIONDATE = 2,
  }

  export enum PhotoCase { 
    _PHOTO_NOT_SET = 0,
    PHOTO = 3,
  }

  export enum AboutcompanyCase { 
    _ABOUTCOMPANY_NOT_SET = 0,
    ABOUTCOMPANY = 4,
  }

  export enum TypecompanyCase { 
    _TYPECOMPANY_NOT_SET = 0,
    TYPECOMPANY = 5,
  }

  export enum LocationCase { 
    _LOCATION_NOT_SET = 0,
    LOCATION = 7,
  }
}

export class GetCompanyRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): GetCompanyRequest;
  hasTitle(): boolean;
  clearTitle(): GetCompanyRequest;

  getAboutcompany(): string;
  setAboutcompany(value: string): GetCompanyRequest;
  hasAboutcompany(): boolean;
  clearAboutcompany(): GetCompanyRequest;

  getTypecompany(): string;
  setTypecompany(value: string): GetCompanyRequest;
  hasTypecompany(): boolean;
  clearTypecompany(): GetCompanyRequest;

  getLocation(): string;
  setLocation(value: string): GetCompanyRequest;
  hasLocation(): boolean;
  clearLocation(): GetCompanyRequest;

  getContractsList(): Array<string>;
  setContractsList(value: Array<string>): GetCompanyRequest;
  clearContractsList(): GetCompanyRequest;
  addContracts(value: string, index?: number): GetCompanyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCompanyRequest): GetCompanyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCompanyRequest;
  static deserializeBinaryFromReader(message: GetCompanyRequest, reader: jspb.BinaryReader): GetCompanyRequest;
}

export namespace GetCompanyRequest {
  export type AsObject = {
    title?: string,
    aboutcompany?: string,
    typecompany?: string,
    location?: string,
    contractsList: Array<string>,
  }

  export enum TitleCase { 
    _TITLE_NOT_SET = 0,
    TITLE = 1,
  }

  export enum AboutcompanyCase { 
    _ABOUTCOMPANY_NOT_SET = 0,
    ABOUTCOMPANY = 3,
  }

  export enum TypecompanyCase { 
    _TYPECOMPANY_NOT_SET = 0,
    TYPECOMPANY = 4,
  }

  export enum LocationCase { 
    _LOCATION_NOT_SET = 0,
    LOCATION = 6,
  }
}

export class Filters extends jspb.Message {
  getTypecompany(): string;
  setTypecompany(value: string): Filters;
  hasTypecompany(): boolean;
  clearTypecompany(): Filters;

  getLocation(): string;
  setLocation(value: string): Filters;
  hasLocation(): boolean;
  clearLocation(): Filters;

  getContractsList(): Array<string>;
  setContractsList(value: Array<string>): Filters;
  clearContractsList(): Filters;
  addContracts(value: string, index?: number): Filters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filters.AsObject;
  static toObject(includeInstance: boolean, msg: Filters): Filters.AsObject;
  static serializeBinaryToWriter(message: Filters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filters;
  static deserializeBinaryFromReader(message: Filters, reader: jspb.BinaryReader): Filters;
}

export namespace Filters {
  export type AsObject = {
    typecompany?: string,
    location?: string,
    contractsList: Array<string>,
  }

  export enum TypecompanyCase { 
    _TYPECOMPANY_NOT_SET = 0,
    TYPECOMPANY = 4,
  }

  export enum LocationCase { 
    _LOCATION_NOT_SET = 0,
    LOCATION = 6,
  }
}

export class FilterResponse extends jspb.Message {
  getCompanyList(): Array<company_pb.GetCompanyResponse>;
  setCompanyList(value: Array<company_pb.GetCompanyResponse>): FilterResponse;
  clearCompanyList(): FilterResponse;
  addCompany(value?: company_pb.GetCompanyResponse, index?: number): company_pb.GetCompanyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FilterResponse): FilterResponse.AsObject;
  static serializeBinaryToWriter(message: FilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterResponse;
  static deserializeBinaryFromReader(message: FilterResponse, reader: jspb.BinaryReader): FilterResponse;
}

export namespace FilterResponse {
  export type AsObject = {
    companyList: Array<company_pb.GetCompanyResponse.AsObject>,
  }
}


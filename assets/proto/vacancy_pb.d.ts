import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Vacancy extends jspb.Message {
  getExpectedSkillsList(): Array<Skill>;
  setExpectedSkillsList(value: Array<Skill>): Vacancy;
  clearExpectedSkillsList(): Vacancy;
  addExpectedSkills(value?: Skill, index?: number): Skill;

  getAboutPractice(): string;
  setAboutPractice(value: string): Vacancy;

  getDirectionsList(): Array<Direction>;
  setDirectionsList(value: Array<Direction>): Vacancy;
  clearDirectionsList(): Vacancy;
  addDirections(value?: Direction, index?: number): Direction;

  getAboutProjects(): string;
  setAboutProjects(value: string): Vacancy;

  getCompanyId(): string;
  setCompanyId(value: string): Vacancy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vacancy.AsObject;
  static toObject(includeInstance: boolean, msg: Vacancy): Vacancy.AsObject;
  static serializeBinaryToWriter(message: Vacancy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vacancy;
  static deserializeBinaryFromReader(message: Vacancy, reader: jspb.BinaryReader): Vacancy;
}

export namespace Vacancy {
  export type AsObject = {
    expectedSkillsList: Array<Skill.AsObject>,
    aboutPractice: string,
    directionsList: Array<Direction.AsObject>,
    aboutProjects: string,
    companyId: string,
  }
}

export class Skill extends jspb.Message {
  getSkill(): string;
  setSkill(value: string): Skill;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Skill.AsObject;
  static toObject(includeInstance: boolean, msg: Skill): Skill.AsObject;
  static serializeBinaryToWriter(message: Skill, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Skill;
  static deserializeBinaryFromReader(message: Skill, reader: jspb.BinaryReader): Skill;
}

export namespace Skill {
  export type AsObject = {
    skill: string,
  }
}

export class Direction extends jspb.Message {
  getDirection(): string;
  setDirection(value: string): Direction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Direction.AsObject;
  static toObject(includeInstance: boolean, msg: Direction): Direction.AsObject;
  static serializeBinaryToWriter(message: Direction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Direction;
  static deserializeBinaryFromReader(message: Direction, reader: jspb.BinaryReader): Direction;
}

export namespace Direction {
  export type AsObject = {
    direction: string,
  }
}

export class CreateVacancyRequest extends jspb.Message {
  getVacancy(): Vacancy | undefined;
  setVacancy(value?: Vacancy): CreateVacancyRequest;
  hasVacancy(): boolean;
  clearVacancy(): CreateVacancyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVacancyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVacancyRequest): CreateVacancyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVacancyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVacancyRequest;
  static deserializeBinaryFromReader(message: CreateVacancyRequest, reader: jspb.BinaryReader): CreateVacancyRequest;
}

export namespace CreateVacancyRequest {
  export type AsObject = {
    vacancy?: Vacancy.AsObject,
  }
}

export class UpdateVacancyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateVacancyRequest;

  getVacancy(): Vacancy | undefined;
  setVacancy(value?: Vacancy): UpdateVacancyRequest;
  hasVacancy(): boolean;
  clearVacancy(): UpdateVacancyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVacancyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVacancyRequest): UpdateVacancyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVacancyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVacancyRequest;
  static deserializeBinaryFromReader(message: UpdateVacancyRequest, reader: jspb.BinaryReader): UpdateVacancyRequest;
}

export namespace UpdateVacancyRequest {
  export type AsObject = {
    id: string,
    vacancy?: Vacancy.AsObject,
  }
}

export class VacancyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): VacancyResponse;

  getVacancy(): Vacancy | undefined;
  setVacancy(value?: Vacancy): VacancyResponse;
  hasVacancy(): boolean;
  clearVacancy(): VacancyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VacancyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VacancyResponse): VacancyResponse.AsObject;
  static serializeBinaryToWriter(message: VacancyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VacancyResponse;
  static deserializeBinaryFromReader(message: VacancyResponse, reader: jspb.BinaryReader): VacancyResponse;
}

export namespace VacancyResponse {
  export type AsObject = {
    id: string,
    vacancy?: Vacancy.AsObject,
  }
}

export class VacancyCreated extends jspb.Message {
  getId(): string;
  setId(value: string): VacancyCreated;

  getVacancy(): Vacancy | undefined;
  setVacancy(value?: Vacancy): VacancyCreated;
  hasVacancy(): boolean;
  clearVacancy(): VacancyCreated;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): VacancyCreated;
  hasTimestamp(): boolean;
  clearTimestamp(): VacancyCreated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VacancyCreated.AsObject;
  static toObject(includeInstance: boolean, msg: VacancyCreated): VacancyCreated.AsObject;
  static serializeBinaryToWriter(message: VacancyCreated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VacancyCreated;
  static deserializeBinaryFromReader(message: VacancyCreated, reader: jspb.BinaryReader): VacancyCreated;
}

export namespace VacancyCreated {
  export type AsObject = {
    id: string,
    vacancy?: Vacancy.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class VacancyUpdated extends jspb.Message {
  getId(): string;
  setId(value: string): VacancyUpdated;

  getVacancy(): Vacancy | undefined;
  setVacancy(value?: Vacancy): VacancyUpdated;
  hasVacancy(): boolean;
  clearVacancy(): VacancyUpdated;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): VacancyUpdated;
  hasTimestamp(): boolean;
  clearTimestamp(): VacancyUpdated;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VacancyUpdated.AsObject;
  static toObject(includeInstance: boolean, msg: VacancyUpdated): VacancyUpdated.AsObject;
  static serializeBinaryToWriter(message: VacancyUpdated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VacancyUpdated;
  static deserializeBinaryFromReader(message: VacancyUpdated, reader: jspb.BinaryReader): VacancyUpdated;
}

export namespace VacancyUpdated {
  export type AsObject = {
    id: string,
    vacancy?: Vacancy.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetVacancyByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetVacancyByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVacancyByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVacancyByIdRequest): GetVacancyByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetVacancyByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVacancyByIdRequest;
  static deserializeBinaryFromReader(message: GetVacancyByIdRequest, reader: jspb.BinaryReader): GetVacancyByIdRequest;
}

export namespace GetVacancyByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetVacanciesByParamsRequest extends jspb.Message {
  getExpectedSkillsList(): Array<Skill>;
  setExpectedSkillsList(value: Array<Skill>): GetVacanciesByParamsRequest;
  clearExpectedSkillsList(): GetVacanciesByParamsRequest;
  addExpectedSkills(value?: Skill, index?: number): Skill;

  getAboutPractice(): string;
  setAboutPractice(value: string): GetVacanciesByParamsRequest;

  getDirectionsList(): Array<Direction>;
  setDirectionsList(value: Array<Direction>): GetVacanciesByParamsRequest;
  clearDirectionsList(): GetVacanciesByParamsRequest;
  addDirections(value?: Direction, index?: number): Direction;

  getCompanyId(): string;
  setCompanyId(value: string): GetVacanciesByParamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVacanciesByParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVacanciesByParamsRequest): GetVacanciesByParamsRequest.AsObject;
  static serializeBinaryToWriter(message: GetVacanciesByParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVacanciesByParamsRequest;
  static deserializeBinaryFromReader(message: GetVacanciesByParamsRequest, reader: jspb.BinaryReader): GetVacanciesByParamsRequest;
}

export namespace GetVacanciesByParamsRequest {
  export type AsObject = {
    expectedSkillsList: Array<Skill.AsObject>,
    aboutPractice: string,
    directionsList: Array<Direction.AsObject>,
    companyId: string,
  }
}

export class GetVacanciesResponse extends jspb.Message {
  getVacanciesList(): Array<VacancyWithId>;
  setVacanciesList(value: Array<VacancyWithId>): GetVacanciesResponse;
  clearVacanciesList(): GetVacanciesResponse;
  addVacancies(value?: VacancyWithId, index?: number): VacancyWithId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVacanciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVacanciesResponse): GetVacanciesResponse.AsObject;
  static serializeBinaryToWriter(message: GetVacanciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVacanciesResponse;
  static deserializeBinaryFromReader(message: GetVacanciesResponse, reader: jspb.BinaryReader): GetVacanciesResponse;
}

export namespace GetVacanciesResponse {
  export type AsObject = {
    vacanciesList: Array<VacancyWithId.AsObject>,
  }
}

export class VacancyWithId extends jspb.Message {
  getId(): string;
  setId(value: string): VacancyWithId;

  getExpectedSkillsList(): Array<Skill>;
  setExpectedSkillsList(value: Array<Skill>): VacancyWithId;
  clearExpectedSkillsList(): VacancyWithId;
  addExpectedSkills(value?: Skill, index?: number): Skill;

  getAboutPractice(): string;
  setAboutPractice(value: string): VacancyWithId;

  getDirectionsList(): Array<Direction>;
  setDirectionsList(value: Array<Direction>): VacancyWithId;
  clearDirectionsList(): VacancyWithId;
  addDirections(value?: Direction, index?: number): Direction;

  getAboutProjects(): string;
  setAboutProjects(value: string): VacancyWithId;

  getCompanyId(): string;
  setCompanyId(value: string): VacancyWithId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VacancyWithId.AsObject;
  static toObject(includeInstance: boolean, msg: VacancyWithId): VacancyWithId.AsObject;
  static serializeBinaryToWriter(message: VacancyWithId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VacancyWithId;
  static deserializeBinaryFromReader(message: VacancyWithId, reader: jspb.BinaryReader): VacancyWithId;
}

export namespace VacancyWithId {
  export type AsObject = {
    id: string,
    expectedSkillsList: Array<Skill.AsObject>,
    aboutPractice: string,
    directionsList: Array<Direction.AsObject>,
    aboutProjects: string,
    companyId: string,
  }
}


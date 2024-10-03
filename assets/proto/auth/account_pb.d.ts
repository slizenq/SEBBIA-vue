import * as jspb from 'google-protobuf'



export class Email extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): Email;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Email.AsObject;
  static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
  static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Email;
  static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
  export type AsObject = {
    email: string,
  }
}

export class Password extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): Password;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Password.AsObject;
  static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
  static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Password;
  static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
}

export namespace Password {
  export type AsObject = {
    password: string,
  }
}

export class Account extends jspb.Message {
  getEmail(): Email | undefined;
  setEmail(value?: Email): Account;
  hasEmail(): boolean;
  clearEmail(): Account;

  getPassword(): Password | undefined;
  setPassword(value?: Password): Account;
  hasPassword(): boolean;
  clearPassword(): Account;

  getIscompany(): boolean;
  setIscompany(value: boolean): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    email?: Email.AsObject,
    password?: Password.AsObject,
    iscompany: boolean,
  }
}

export class AccountInfo extends jspb.Message {
  getEmail(): Email | undefined;
  setEmail(value?: Email): AccountInfo;
  hasEmail(): boolean;
  clearEmail(): AccountInfo;

  getIscompany(): boolean;
  setIscompany(value: boolean): AccountInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AccountInfo): AccountInfo.AsObject;
  static serializeBinaryToWriter(message: AccountInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountInfo;
  static deserializeBinaryFromReader(message: AccountInfo, reader: jspb.BinaryReader): AccountInfo;
}

export namespace AccountInfo {
  export type AsObject = {
    email?: Email.AsObject,
    iscompany: boolean,
  }
}


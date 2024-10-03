import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as account_pb from './account_pb'; // proto import: "account.proto"


export class LoginData extends jspb.Message {
  getEmail(): account_pb.Email | undefined;
  setEmail(value?: account_pb.Email): LoginData;
  hasEmail(): boolean;
  clearEmail(): LoginData;

  getPassword(): account_pb.Password | undefined;
  setPassword(value?: account_pb.Password): LoginData;
  hasPassword(): boolean;
  clearPassword(): LoginData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginData.AsObject;
  static toObject(includeInstance: boolean, msg: LoginData): LoginData.AsObject;
  static serializeBinaryToWriter(message: LoginData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginData;
  static deserializeBinaryFromReader(message: LoginData, reader: jspb.BinaryReader): LoginData;
}

export namespace LoginData {
  export type AsObject = {
    email?: account_pb.Email.AsObject,
    password?: account_pb.Password.AsObject,
  }
}

export class Token extends jspb.Message {
  getToken(): string;
  setToken(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    token: string,
  }
}

export class RefreshToken extends jspb.Message {
  getRefreshtoken(): Token | undefined;
  setRefreshtoken(value?: Token): RefreshToken;
  hasRefreshtoken(): boolean;
  clearRefreshtoken(): RefreshToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshToken.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshToken): RefreshToken.AsObject;
  static serializeBinaryToWriter(message: RefreshToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshToken;
  static deserializeBinaryFromReader(message: RefreshToken, reader: jspb.BinaryReader): RefreshToken;
}

export namespace RefreshToken {
  export type AsObject = {
    refreshtoken?: Token.AsObject,
  }
}

export class AccessToken extends jspb.Message {
  getAccesstoken(): Token | undefined;
  setAccesstoken(value?: Token): AccessToken;
  hasAccesstoken(): boolean;
  clearAccesstoken(): AccessToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessToken.AsObject;
  static toObject(includeInstance: boolean, msg: AccessToken): AccessToken.AsObject;
  static serializeBinaryToWriter(message: AccessToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessToken;
  static deserializeBinaryFromReader(message: AccessToken, reader: jspb.BinaryReader): AccessToken;
}

export namespace AccessToken {
  export type AsObject = {
    accesstoken?: Token.AsObject,
  }
}

export class PairTokens extends jspb.Message {
  getAccesstoken(): AccessToken | undefined;
  setAccesstoken(value?: AccessToken): PairTokens;
  hasAccesstoken(): boolean;
  clearAccesstoken(): PairTokens;

  getRefreshtoken(): RefreshToken | undefined;
  setRefreshtoken(value?: RefreshToken): PairTokens;
  hasRefreshtoken(): boolean;
  clearRefreshtoken(): PairTokens;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PairTokens.AsObject;
  static toObject(includeInstance: boolean, msg: PairTokens): PairTokens.AsObject;
  static serializeBinaryToWriter(message: PairTokens, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PairTokens;
  static deserializeBinaryFromReader(message: PairTokens, reader: jspb.BinaryReader): PairTokens;
}

export namespace PairTokens {
  export type AsObject = {
    accesstoken?: AccessToken.AsObject,
    refreshtoken?: RefreshToken.AsObject,
  }
}

export class NewPassword extends jspb.Message {
  getOldpassword(): account_pb.Password | undefined;
  setOldpassword(value?: account_pb.Password): NewPassword;
  hasOldpassword(): boolean;
  clearOldpassword(): NewPassword;

  getPassword(): account_pb.Password | undefined;
  setPassword(value?: account_pb.Password): NewPassword;
  hasPassword(): boolean;
  clearPassword(): NewPassword;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewPassword.AsObject;
  static toObject(includeInstance: boolean, msg: NewPassword): NewPassword.AsObject;
  static serializeBinaryToWriter(message: NewPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewPassword;
  static deserializeBinaryFromReader(message: NewPassword, reader: jspb.BinaryReader): NewPassword;
}

export namespace NewPassword {
  export type AsObject = {
    oldpassword?: account_pb.Password.AsObject,
    password?: account_pb.Password.AsObject,
  }
}

export class NewEmail extends jspb.Message {
  getEmail(): account_pb.Email | undefined;
  setEmail(value?: account_pb.Email): NewEmail;
  hasEmail(): boolean;
  clearEmail(): NewEmail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewEmail.AsObject;
  static toObject(includeInstance: boolean, msg: NewEmail): NewEmail.AsObject;
  static serializeBinaryToWriter(message: NewEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewEmail;
  static deserializeBinaryFromReader(message: NewEmail, reader: jspb.BinaryReader): NewEmail;
}

export namespace NewEmail {
  export type AsObject = {
    email?: account_pb.Email.AsObject,
  }
}

export class VerifyTokenResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): VerifyTokenResponse;

  getAccountid(): string;
  setAccountid(value: string): VerifyTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyTokenResponse): VerifyTokenResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyTokenResponse;
  static deserializeBinaryFromReader(message: VerifyTokenResponse, reader: jspb.BinaryReader): VerifyTokenResponse;
}

export namespace VerifyTokenResponse {
  export type AsObject = {
    status: boolean,
    accountid: string,
  }
}

export class OTPRequest extends jspb.Message {
  getEmail(): account_pb.Email | undefined;
  setEmail(value?: account_pb.Email): OTPRequest;
  hasEmail(): boolean;
  clearEmail(): OTPRequest;

  getCode(): string;
  setCode(value: string): OTPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OTPRequest): OTPRequest.AsObject;
  static serializeBinaryToWriter(message: OTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OTPRequest;
  static deserializeBinaryFromReader(message: OTPRequest, reader: jspb.BinaryReader): OTPRequest;
}

export namespace OTPRequest {
  export type AsObject = {
    email?: account_pb.Email.AsObject,
    code: string,
  }
}

export class OTPResponse extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): OTPResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OTPResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OTPResponse): OTPResponse.AsObject;
  static serializeBinaryToWriter(message: OTPResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OTPResponse;
  static deserializeBinaryFromReader(message: OTPResponse, reader: jspb.BinaryReader): OTPResponse;
}

export namespace OTPResponse {
  export type AsObject = {
    status: boolean,
  }
}

export class RestorePasswordRequest extends jspb.Message {
  getEmail(): account_pb.Email | undefined;
  setEmail(value?: account_pb.Email): RestorePasswordRequest;
  hasEmail(): boolean;
  clearEmail(): RestorePasswordRequest;

  getNewpassword(): account_pb.Password | undefined;
  setNewpassword(value?: account_pb.Password): RestorePasswordRequest;
  hasNewpassword(): boolean;
  clearNewpassword(): RestorePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestorePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestorePasswordRequest): RestorePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: RestorePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestorePasswordRequest;
  static deserializeBinaryFromReader(message: RestorePasswordRequest, reader: jspb.BinaryReader): RestorePasswordRequest;
}

export namespace RestorePasswordRequest {
  export type AsObject = {
    email?: account_pb.Email.AsObject,
    newpassword?: account_pb.Password.AsObject,
  }
}

export class SendOTPRequest extends jspb.Message {
  getEmail(): account_pb.Email | undefined;
  setEmail(value?: account_pb.Email): SendOTPRequest;
  hasEmail(): boolean;
  clearEmail(): SendOTPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendOTPRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendOTPRequest): SendOTPRequest.AsObject;
  static serializeBinaryToWriter(message: SendOTPRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendOTPRequest;
  static deserializeBinaryFromReader(message: SendOTPRequest, reader: jspb.BinaryReader): SendOTPRequest;
}

export namespace SendOTPRequest {
  export type AsObject = {
    email?: account_pb.Email.AsObject,
  }
}

export class TokensWithUserInfo extends jspb.Message {
  getAccesstoken(): AccessToken | undefined;
  setAccesstoken(value?: AccessToken): TokensWithUserInfo;
  hasAccesstoken(): boolean;
  clearAccesstoken(): TokensWithUserInfo;

  getRefreshtoken(): RefreshToken | undefined;
  setRefreshtoken(value?: RefreshToken): TokensWithUserInfo;
  hasRefreshtoken(): boolean;
  clearRefreshtoken(): TokensWithUserInfo;

  getAccount(): account_pb.AccountInfo | undefined;
  setAccount(value?: account_pb.AccountInfo): TokensWithUserInfo;
  hasAccount(): boolean;
  clearAccount(): TokensWithUserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokensWithUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TokensWithUserInfo): TokensWithUserInfo.AsObject;
  static serializeBinaryToWriter(message: TokensWithUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokensWithUserInfo;
  static deserializeBinaryFromReader(message: TokensWithUserInfo, reader: jspb.BinaryReader): TokensWithUserInfo;
}

export namespace TokensWithUserInfo {
  export type AsObject = {
    accesstoken?: AccessToken.AsObject,
    refreshtoken?: RefreshToken.AsObject,
    account?: account_pb.AccountInfo.AsObject,
  }
}


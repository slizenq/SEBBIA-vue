import * as grpcWeb from 'grpc-web';

import * as account_pb from './account_pb'; // proto import: "account.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as authService_pb from './authService_pb'; // proto import: "authService.proto"


export class SSOServerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  signUp(
    request: account_pb.Account,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.TokensWithUserInfo) => void
  ): grpcWeb.ClientReadableStream<authService_pb.TokensWithUserInfo>;

  login(
    request: authService_pb.LoginData,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.TokensWithUserInfo) => void
  ): grpcWeb.ClientReadableStream<authService_pb.TokensWithUserInfo>;

  verifyToken(
    request: authService_pb.Token,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.VerifyTokenResponse) => void
  ): grpcWeb.ClientReadableStream<authService_pb.VerifyTokenResponse>;

  logout(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  rotateTokens(
    request: authService_pb.RefreshToken,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.PairTokens) => void
  ): grpcWeb.ClientReadableStream<authService_pb.PairTokens>;

  changePassword(
    request: authService_pb.NewPassword,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.PairTokens) => void
  ): grpcWeb.ClientReadableStream<authService_pb.PairTokens>;

  changeEmail(
    request: authService_pb.NewEmail,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.PairTokens) => void
  ): grpcWeb.ClientReadableStream<authService_pb.PairTokens>;

  sendOTP(
    request: authService_pb.SendOTPRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  checkOTP(
    request: authService_pb.OTPRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.OTPResponse) => void
  ): grpcWeb.ClientReadableStream<authService_pb.OTPResponse>;

  restorePassword(
    request: authService_pb.RestorePasswordRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authService_pb.PairTokens) => void
  ): grpcWeb.ClientReadableStream<authService_pb.PairTokens>;

  logoutFromDevices(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class SSOServerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  signUp(
    request: account_pb.Account,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.TokensWithUserInfo>;

  login(
    request: authService_pb.LoginData,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.TokensWithUserInfo>;

  verifyToken(
    request: authService_pb.Token,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.VerifyTokenResponse>;

  logout(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  rotateTokens(
    request: authService_pb.RefreshToken,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.PairTokens>;

  changePassword(
    request: authService_pb.NewPassword,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.PairTokens>;

  changeEmail(
    request: authService_pb.NewEmail,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.PairTokens>;

  sendOTP(
    request: authService_pb.SendOTPRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  checkOTP(
    request: authService_pb.OTPRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.OTPResponse>;

  restorePassword(
    request: authService_pb.RestorePasswordRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<authService_pb.PairTokens>;

  logoutFromDevices(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}


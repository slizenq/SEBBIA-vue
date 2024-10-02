import * as grpcWeb from 'grpc-web';

import * as assets_proto_vacancy_pb from '../../assets/proto/vacancy_pb'; // proto import: "assets/proto/vacancy.proto"


export class VacancyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVacancy(
    request: assets_proto_vacancy_pb.CreateVacancyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: assets_proto_vacancy_pb.VacancyResponse) => void
  ): grpcWeb.ClientReadableStream<assets_proto_vacancy_pb.VacancyResponse>;

  updateVacancy(
    request: assets_proto_vacancy_pb.UpdateVacancyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: assets_proto_vacancy_pb.VacancyResponse) => void
  ): grpcWeb.ClientReadableStream<assets_proto_vacancy_pb.VacancyResponse>;

  getVacancyById(
    request: assets_proto_vacancy_pb.GetVacancyByIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: assets_proto_vacancy_pb.VacancyResponse) => void
  ): grpcWeb.ClientReadableStream<assets_proto_vacancy_pb.VacancyResponse>;

  getVacanciesByParams(
    request: assets_proto_vacancy_pb.GetVacanciesByParamsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: assets_proto_vacancy_pb.GetVacanciesResponse) => void
  ): grpcWeb.ClientReadableStream<assets_proto_vacancy_pb.GetVacanciesResponse>;

}

export class VacancyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createVacancy(
    request: assets_proto_vacancy_pb.CreateVacancyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<assets_proto_vacancy_pb.VacancyResponse>;

  updateVacancy(
    request: assets_proto_vacancy_pb.UpdateVacancyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<assets_proto_vacancy_pb.VacancyResponse>;

  getVacancyById(
    request: assets_proto_vacancy_pb.GetVacancyByIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<assets_proto_vacancy_pb.VacancyResponse>;

  getVacanciesByParams(
    request: assets_proto_vacancy_pb.GetVacanciesByParamsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<assets_proto_vacancy_pb.GetVacanciesResponse>;

}


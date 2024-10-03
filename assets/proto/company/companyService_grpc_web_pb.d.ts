import * as grpcWeb from 'grpc-web';

import * as companyService_pb from './companyService_pb'; // proto import: "companyService.proto"
import * as company_pb from './company_pb'; // proto import: "company.proto"


export class CompanyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCompany(
    request: company_pb.Company,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: company_pb.GetCompanyResponse) => void
  ): grpcWeb.ClientReadableStream<company_pb.GetCompanyResponse>;

  changeCompany(
    request: companyService_pb.ChangeCompanyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: company_pb.GetCompanyResponse) => void
  ): grpcWeb.ClientReadableStream<company_pb.GetCompanyResponse>;

  getCompany(
    request: companyService_pb.GetCompanyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: company_pb.GetCompanyResponse) => void
  ): grpcWeb.ClientReadableStream<company_pb.GetCompanyResponse>;

  getCompaniesByFilters(
    request: companyService_pb.Filters,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: companyService_pb.FilterResponse) => void
  ): grpcWeb.ClientReadableStream<companyService_pb.FilterResponse>;

}

export class CompanyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createCompany(
    request: company_pb.Company,
    metadata?: grpcWeb.Metadata
  ): Promise<company_pb.GetCompanyResponse>;

  changeCompany(
    request: companyService_pb.ChangeCompanyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<company_pb.GetCompanyResponse>;

  getCompany(
    request: companyService_pb.GetCompanyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<company_pb.GetCompanyResponse>;

  getCompaniesByFilters(
    request: companyService_pb.Filters,
    metadata?: grpcWeb.Metadata
  ): Promise<companyService_pb.FilterResponse>;

}


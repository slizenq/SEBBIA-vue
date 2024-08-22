// package: io.cloudevents.v1
// file: cloudevent.proto

import * as cloudevent_pb from "./cloudevent_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CloudEventServicePublish = {
  readonly methodName: string;
  readonly service: typeof CloudEventService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof cloudevent_pb.PublishRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CloudEventServiceSubscribe = {
  readonly methodName: string;
  readonly service: typeof CloudEventService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof cloudevent_pb.SubscriptionRequest;
  readonly responseType: typeof cloudevent_pb.CloudEvent;
};

export class CloudEventService {
  static readonly serviceName: string;
  static readonly Publish: CloudEventServicePublish;
  static readonly Subscribe: CloudEventServiceSubscribe;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class CloudEventServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  publish(
    requestMessage: cloudevent_pb.PublishRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  publish(
    requestMessage: cloudevent_pb.PublishRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  subscribe(requestMessage: cloudevent_pb.SubscriptionRequest, metadata?: grpc.Metadata): ResponseStream<cloudevent_pb.CloudEvent>;
}


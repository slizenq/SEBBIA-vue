// package: io.cloudevents.v1
// file: cloudevent.proto

var cloudevent_pb = require("./cloudevent_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CloudEventService = (function () {
  function CloudEventService() {}
  CloudEventService.serviceName = "io.cloudevents.v1.CloudEventService";
  return CloudEventService;
}());

CloudEventService.Publish = {
  methodName: "Publish",
  service: CloudEventService,
  requestStream: false,
  responseStream: false,
  requestType: cloudevent_pb.PublishRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CloudEventService.Subscribe = {
  methodName: "Subscribe",
  service: CloudEventService,
  requestStream: false,
  responseStream: true,
  requestType: cloudevent_pb.SubscriptionRequest,
  responseType: cloudevent_pb.CloudEvent
};

exports.CloudEventService = CloudEventService;

function CloudEventServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CloudEventServiceClient.prototype.publish = function publish(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CloudEventService.Publish, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CloudEventServiceClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(CloudEventService.Subscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.CloudEventServiceClient = CloudEventServiceClient;


ts-proto

npm install ts-proto

protoc --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=importSuffix=.js:. assets\proto\test\example.proto


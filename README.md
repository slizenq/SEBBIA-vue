Пока не микросервис 😈, весь функционал будет работать если на моем пк подняты все контейнеры 👿 плаки плаки((


$Env:Path += ";D:\protoc\protoc-win-27.1-win64\bin"   

protoc -I="D:\SEBBIA\assets\proto" "D:\SEBBIA\assets\proto\vacancy.proto" --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"D:\SEBBIA\assets\proto"

npm install grpc-web google-protobuf

|| protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:. assets/proto/vacancy.proto
|| protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:. company.proto companyService.proto
 



|| protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:. auth.proto

protoc -I=assets\proto\test calculator.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:assets\proto\test


npm install path-browserify stream-browserify browserify-zlib os-browserify util process stream-http url


protoc -I="." calculator.proto --js_out=import_style=commonjs:.

protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:. account.proto authService.proto

////////////////////////////////////////////////////////////////////////////////////////////////////

ts-proto


npm install ts-proto


protoc --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=importSuffix=.js:. assets\proto\test\example.proto
{
    // https://nuxt.com/docs/guide/concepts/typescript
    "extends": "./.nuxt/tsconfig.json",
    "compilerOptions": {
        "esModuleInterop": true,
    }
}
import { grpc } from '@improbable-eng/grpc-web';
npm install -g pnpm
import { grpc } from '@improbable-eng/grpc-web';


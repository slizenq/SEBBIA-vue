ts-proto

npm install ts-proto

protoc --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=importSuffix=.js:. assets\proto\test\example.proto

<script>
    import { ElNotification } from "element-plus";
    ElNotification(
        {
            title: "Произошла ошибка при отправке", 
            message: "Проверьте соединение к интернету", 
            duration: 2000, 
            type: "error", 
            showClose: false
        }
    );
<script/>

<style>
.img_margin {
    margin-top: 20px
}
.el-notification {
    width: 484px;
    height: auto;
    background-color: rgba(236, 245, 255, 1);
    color: #409eff;
}

.el-notification__title {
    color: #409eff;
}

.el-notification__content p {
    color: #409eff;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}
</style>
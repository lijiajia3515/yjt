#版本 2021.10.22

### 版本描述
#### 1. 优化`图片`, `问题` 模块
#### 2. 修复了一些已知问题.

#### 管理端
##### 1. 新增1个报告模板
##### 2. 模糊评判6级模型调整为4级, 修复了一些已知问题
##### 3. 优化按钮点击(防重复提交)
##### 4. 调整`项目签到`统计展示
##### 5. 优化 `项目列表``问题列表` `委托方列表` 展示方式

#### APP端
##### 1. 图片上传及图片水印流程优化；
##### 2. 部位与图片水印关联优化；
##### 3. 规范条款调整；
##### 4. bug fix；

#### 服务端
##### 1. 添加 `压缩图片` 服务
##### 2. `文件服务`, 优化 `文件签名` `文件信息` 接口
##### 3. 新增适配 1个报告模板
##### 4. 修复已知问题
##### 5. 优化部署方式

#### 数据库
##### 1. 数据库命名调整
##### 2. 优化数据结构

#### 容器镜像
```text
registry.cn-beijing.aliyuncs.com/hfhksoft/cairo-auth-server:2021.09.21
registry.cn-beijing.aliyuncs.com/hfhksoft/cairo-system-service:2021.10.22
registry.cn-beijing.aliyuncs.com/hfhksoft/cairo-auth-service:2021.10.22

registry.cn-beijing.aliyuncs.com/hfhksoft/gateway:2021.10.01

registry.cn-beijing.aliyuncs.com/hfhksoft/yr-service:2021.10.22
registry.cn-beijing.aliyuncs.com/hfhksoft/yr-check-service:2021.10.22
registry.cn-beijing.aliyuncs.com/hfhksoft/yr-equipment-service:2021.10.22
registry.cn-beijing.aliyuncs.com/hfhksoft/yr-manage:2021.10.22-manage.yr.hfhksoft.com 

mysql:8.0.20
redis:6.2.5-alpine

consul:latest
rabbitmq:3.9.5-management-alpine


minio/minio:RELEASE.2021-09-23T04-46-24Z 
darthsim/imgproxy:latest

traefik:latest
```
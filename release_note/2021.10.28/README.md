#版本 2021.10.28

### 版本描述
#### 1. 添加 trace `zipkin`
#### 2. 修复了一些已知问题.

#### 管理端
##### 1. 无

#### APP端
##### 1. 无

#### 服务端
##### 1.修复报告模块bug
##### 添加 trace zipkin 

#### 数据库
##### 1. 添加 体系库重新排序脚本

#### 容器镜像
```text
registry.cn-beijing.aliyuncs.com/hfhksoft/cairo-auth-server:2021.10.26
registry.cn-beijing.aliyuncs.com/hfhksoft/cairo-auth-service:2021.10.27
registry.cn-beijing.aliyuncs.com/hfhksoft/cairo-system-service:2021.10.27


registry.cn-beijing.aliyuncs.com/hfhksoft/service:2021.10.27

registry.cn-beijing.aliyuncs.com/hfhksoft/yr-service:2021.10.27 #等打包
registry.cn-beijing.aliyuncs.com/hfhksoft/yr-check-service:2021.10.27 #等打包
registry.cn-beijing.aliyuncs.com/hfhksoft/yr-equipment-service:2021.10.27
registry.cn-beijing.aliyuncs.com/hfhksoft/yr-manage:2021.10.22-manage.yr.hfhksoft.com 

mysql:8.0.20
mongo:4.4.9
redis:6.2.5-alpine
rabbitmq:3.9.5-management-alpine

consul:1.10.1
zipkin:2.23.4

minio/minio:RELEASE.2021-09-23T04-46-24Z 
darthsim/imgproxy:v2.17

traefik:2.5.3
```
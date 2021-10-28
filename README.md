# 毅建通
## 介绍
to business project
## 功能描述
### APP端

#### 系统

1. `修改头像`

#### 检查

1. `我的计划`  `代办`
2. `问题上报` `设备信息更新`

#### 视频监控

1. `项目监控实时预览`

#### CRM

1. `物品管理`

### 管理端

#### 系统管理

1. `权限` `角色` `部门` `用户`
2. `字典` `行政区划`

#### 信息管理

1. `企业` `项目` `合同` `设备` `档案`

#### 检查管理

1. `体系库``问题库``模型` `专家`
2. `计划` `任务` `代办``签到`
3. `问题上报` `模糊评判` `打分评价`

可视化

1. `签到统计`

#### CRM

1. #### `物品管理`

### 服务端

#### 版本信息

```yaml
cairo_auth: 2021.10.01
cairo_auth_server: 2021.10.01
cairo_auth_service: 2021.10.01
cairo_system_service: 2021.10.01

yr_check_service: 2021.10.01
yr_service: 2021.10.01
yr_equipment_service: 2021.10.01
```

## release note
### 2021.10.01 毅建通0.0.1版本发布
### 2021.10.22 修复了一些已知问题.
#### app端更新
##### 1. 优化 `图片上传`,`图片显示`,`水印`功能
##### 2. 修复按钮点击(重复提交)
##### 3. 调整`问题上报-问题措施`展现方式
##### 4. 优化底层逻辑


#### 管理端更新

##### 1. 新增1个报告模板
##### 2. 模糊评判6级模型调整为4级, 修复了一些已知问题
##### 3. 优化按钮点击(防重复提交)
##### 4. 调整`项目签到`统计展示
##### 5. 优化 `项目列表``问题列表` `委托方列表` 展示方式

#### 服务端更新
##### 1. 添加 `压缩图片` 服务
##### 2. `文件服务`, 优化 `文件签名` `文件信息` 接口
##### 3. 新增适配 1个报告模板
##### 4. 修复已知问题
##### 5. 优化部署方式

####版本 2021.10.28

### 版本描述
#### 1. 添加 trace `zipkin`
#### 2. 修复了一些已知问题.
#### 3. 报告生成问题 修复

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

registry.cn-beijing.aliyuncs.com/hfhksoft/yr-service:2021.10.27
registry.cn-beijing.aliyuncs.com/hfhksoft/yr-check-service:2021.10.27
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

### 实现清单
1. 问题上报 & 正确做法 接口拆分
2. 
### 模糊数学权重修正
1. 指标层-按照隶属度值倒序(最大最前,最小最后)
2. 指标层-取第一,第二权重值
3. 权重修正- 指标层.权重 == 最大隶属度指标.权重 (存在多个第一情况)
```javascript
let weight = 0;
let m1Weight = sortWeights[0];
let m2Weight = sortWeights[1];
if(weight == m1Weight) {
  weight = Math.max(m1Weight*1.05);
} else if(weight < m2Weight * 1.05){
    weight = m2Weight*1.05
} else if ( ?? ){
    weight = m1Weight;
}
```
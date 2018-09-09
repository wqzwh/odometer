## 优化数字滚动插件自动补零问题

### 新增配置项

#### numberLength

可以通过numberLength配置项显示的位数，默认为12位数

```js
new Odometer({
  el: dom,
  theme: 'default',
  duration: 80,
  format: '(,ddd)',
  numberLength:12
});
```
<img src="https://github.com/wqzwh/ga-odometer/blob/master/img/1.gif?raw=true" style="max-width:100%;">

#### zeroFlag 
是否区分补零和数字中的零

```js
new Odometer({
  el: dom,
  theme: 'default',
  duration: 80,
  zeroFlag: true,
  format: '(,ddd)',
  numberLength: 12
});
```

<img src="https://github.com/wqzwh/ga-odometer/blob/master/img/1.gif?raw=true" style="max-width:100%;">

其它剩余配置用法https://github.com/HubSpot/odometer 保持一致

具体测试效果可以打开test文件中的demo.html查看结果
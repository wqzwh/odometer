## 优化数字滚动插件自动补零问题

### 基本使用
删除默认初始化代码，需要自己手动初始化渲染DOM结构，需要添加初始化方法：
```js
const odometerOptions = {
  selector: '.odometer1',
  format: '(,ddd).ddd',
  numberLength: 6,
  duration: 500,
};
Odometer.init(odometerOptions)
odometer.innerHTML = 456.324
```
或者这样使用
```js
const odometerOptions = {
  format: '(,ddd).ddd',
  numberLength: 6,
  duration: 500,
};
new Odometer({
  el: document.getElementById('odometer'),
  ...odometerOptions
})
odometer.innerHTML = 456.324
```

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

<img src="https://github.com/wqzwh/ga-odometer/blob/master/img/2.gif?raw=true" style="max-width:100%;">

其它剩余配置用法https://github.com/HubSpot/odometer 保持一致

具体测试效果可以打开test文件中的demo.html查看结果

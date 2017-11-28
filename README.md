优化数字滚动插件自动补零问题

可以通过numberLength配置项显示的位数，默认为12位数

自定义配置位数使用如下：

```js

new Odometer({
  el: dom,
  theme: 'default',
  duration: 80,
  format: '(,ddd)',
  numberLength:12
});

```

其它剩余配置用法https://github.com/HubSpot/odometer 保持一致

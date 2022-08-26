# Html 设置吸顶操作

## 1. 简介
> 在工作中遇到, 需要将一个div固定在页面的某个位置, 实现吸顶操作, 但是又不想影响页面的布局, 在网上搜了一下, 找到解决方案, 记录一下

## 2. 实现
> 通过设置position: sticky; 实现

## 3. 代码
```css
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
}
```

## 4. 效果
> 效果演示: [两层吸顶](http://www.qiutianaimeili.com/html/_page/2020/03/source/sticky/example.html)
## 5. 注意
> 在设置position: sticky的元素时, 它的父元素不能设置overflow: hidden 和 overflow: auto, 否则无效

> 它只会在父容器的范围内起作用, 效果演示: [只在父容器的范围内起作用](http://www.qiutianaimeili.com/html/_page/2020/03/source/sticky/example1.html)


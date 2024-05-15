# JS 基础

## script 标签 defer、async 属性

`script` 遇到脚本会停止解析，等待脚本加载完成后再继续解析。

`defer` 异步加载、等待执行。属性规定是否对脚本执行进行延迟，直到页面加载为止。

`async` 异步加载、立即执行。属性规定一旦脚本可用，则会异步执行。

## 垃圾回收的算法机制

`引用计数法` 已作废。只要有对一个对象的引用计数+1，当引用失效时计数-1，当计数为 0 时，对象被回收。缺陷在于，两个对象循环引用的话哪怕没有其他变量引用，也会导致无法被回收。

`标记清除法` 分为两个阶段：标记阶段和清除阶段。标记阶段将所有活动对象打上标记，清除阶段遍历堆区，回收没有标记的对象，即从根部无法达到的对象。

## new 的时候发生了什么

- 创建一个空对象
- 设置原型链 `newObject.__proto__=Object.prototype`
- 绑定 this，执行构造函数，返回结果
- 如果构造函数没有返回对象，返回创建的新对象

## 原型链

一个构造函数，可以实例化多个实例对象，每个实例对象都包含一个 `__proto__` 属性，指向构造函数的 `prototype` 属性。
构造函数的`prototype`就是这个构造函数的原型对象，原型对象同样包含一个 `__proto__` 属性，指向 Object 的 `prototype` 属性。而原型对象的 `constructor` 属性又指向构造函数。

原型对象上的任何属性和方法，都可以被实例对象共享。

![原型链图](/images/原型链.png)

## 继承的几种方式

- 原型链继承: 子构造函数的原型对象指向父构造函数的实例对象。

  ```js
  function Parent() {
    this.name = "parent";
  }
  Parent.prototype.getName = function () {
    return this.name;
  };
  function Child() {
    this.type = "child";
  }
  Child.prototype = new Parent();
  var child1 = new Child();
  console.log(child1.getName()); // 输出 "parent"
  ```

- 组合继承：使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承。

  ```js
  function Parent(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  Parent.prototype.getName = function () {
    return this.name;
  };
  function Child(name, age) {
    Parent.call(this, name); //借用构造函数继承属性
    this.age = age;
  }
  Child.prototype = new Parent(); //改造原型链继承方法
  var child1 = new Child("kevin", "18");
  ```

- 寄生组合继承: 使用 Object.create(参数对象)来创建一个新对象，这个新对象的`__proto__` 指向参数对象。

  ```js
  function Parent(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  Parent.prototype.getName = function () {
    return this.name;
  };
  function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
  }
  Child.prototype = Object.create(Parent.prototype); // 创建对象，创建父类原型的一个副本
  ```

- ES6 class 继承: 使用 extends 关键字来实现继承。
  ```js
  class Parent {
    constructor(name) {
      this.name = name;
    }
  }
  class Child extends Parent {
    constructor(name, age) {
      super(name); //extends 中, 必须调用 super(), 会触发执行父类的构造函数
      this.age = age;
    }
  }
  ```

## 宏任务、微任务

## promise

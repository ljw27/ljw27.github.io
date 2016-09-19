# Angular 2 VS. React： 血色将至

> 本文转载自：[众成翻译](http://www.zcfy.cc)
> 译者：[Atwood.Cai](http://www.zcfy.cc/@AtwoodCai)
> 链接：[http://www.zcfy.cc/article/142](http://www.zcfy.cc/article/142)
> 原文：[https://medium.com/@housecor/angular-2-versus-react-there-will-be-blood-66595faafd51#.g1eaz7lye](https://medium.com/@housecor/angular-2-versus-react-there-will-be-blood-66595faafd51#.g1eaz7lye)

[Angular2 已升级到 Beta 版](https://angular.io)并有可能成为 2016 年最火的新框架。尖峰时刻到了，让我们看看它如何应对 2015 年新宠 [React](https://facebook.github.io/react/)。

**声明：**我很享受在 Angular 1 的工作，但是我已在 2015 年转到了 React。我刚刚发布了一个[免费试用课程](http://app.pluralsight.com/signup)“[多视角解读 React 和 Flux](https://www.pluralsight.com/courses/react-flux-building-applications)”。是的，我有些偏心，但这两者的缺点我都会指出。

![](http://p4.qhimg.com/d/inn/8f891cfe/1.jpg)

Photo credit: [@jwcarrol](https://twitter.com/jwcarroll)

### 比较苹果和猩猩


是的， Angular 是一个框架，React 是一个库。有些人说比较他们的区别是毫无意义的。胡说！

> 在 Angular 和 React 之间做选择就像选择买一个现成的电脑与选择利用现成的部件组装你自己的电脑。

本博文会涉及到这两个方法的优点。我将 React 的语法和组件模型与 Angular 的语法和组件模型进行对比，这就像对比一个现成的电脑的 CPU 与一个半成品的 CPU。

### Angular 2 优势

我们先研究 Angular 2 相比 React 的优势。

#### **少一些选择疲劳**


因为 Angular 是一个框架，它提供了非常多好用的思想与功能。而 React，你通常需要加入许多现成的库才能构建一个真正的应用。你可能想要一个路由库、执行单向流库、web API 调用库、测试库、依赖管理库等等。一大堆的选择令人不知所措。这就是为什么 React 有这么多入门套件的原因（我就已经[发布](https://github.com/coryhouse/react-flux-starter-kit)了[两个](https://github.com/coryhouse/react-slingshot)）。

Angular提供了更多现成的思路，可以帮助你快速入门而不用为选择库感到恐惧。这种强制一致性也帮助新员工快速入门并使得开发者在团队之间的切换更高效。

我很欣赏 Angular 核心团队已经拥抱 TypeScript，这引出了下一个优点……

#### TypeScript = 坦途一条

当然， 不是所有的人都喜欢 TypeScript，但是 Angular 2 执着地使用这种 JavaScript 风格是好事。React 的例子在网上非常的不统一 —— 使用 ES5 和 ES6 的数量大约是相等的，而现在又提供了[三种不同的方式来声明组件](http://jamesknelson.com/should-i-use-react-createclass-es6-classes-or-stateless-functional-components/)。这给新人带来了困惑。（Angular 也使用 decorator 替代 extend —— 许多人认为这是有好处的）。

虽然 Angular 2 不要求使用 TypeScript，但 Angular 核心团队毫无疑问地拥抱它并在文档中默认使用它。这意味着相关的例子以及开源项目可能让你感到更熟悉和一致。Angular 已提供了[清晰的例子来说明如何使用 TypeScript 编译器](https://angular.io/docs/ts/latest/quickstart.html)。（虽然不可否认的是，[不是每个人都已接受了 TypeScript](http://angularjs.blogspot.com/2015/09/angular-2-survey-results.html)，但我猜想在它发布后不久就会成为现实标准）。这种一致性，可以避免使用 React 带来的过多的困惑和争论。

#### 少一些折腾

2015 是 [JavaScript 疲劳](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.559iqxb39) 的一年。React 是一个关键的贡献者。因为 React 1.0 版本还未发布，未来可能会有重大修改。React 的生态系统也在快速发展，尤其是围绕着[众多 Flux 特性](https://github.com/kriasoft/react-starter-kit/issues/22)和[路由](https://github.com/rackt/react-router)。这意味着，你现在使用 React 写的东西，在 React 1.0 正式发布后，会觉得过时或需要大改版。


相反， Angular 2 是一个谨慎的、全面的、成熟的系统再造。所以 Angular 在发布后不用大动干戈地改来改去。并且作为一个全面的框架，当你选择了 Angular，你可以信任一个独立的团队对未来做出的谨慎的决定。使用React，你需要照管一大堆不相干又快速变化的开源库，要确保它们在一块可以顺利协作。这是一项费时的、有挫败感的并且永不止步的工作。

#### **大量的工具支持**

正如你接下来看到的，我认为 React 的 JSX 是不错。但是，你需要选择工具来支持 JSX。React 已经如此流行了，因此现在工具的支持不是大问题，但像 IDE 和 linter 这样的新工具并没有支持 JSX。Angular 2 的模板使用一个字符串或分开的 HTML 文件来保存标签，因此它不需要特殊的工具支持（尽管它发布了工具来智能地解析 Angular 的字符串模板）。那就是说，Angular 的方法有它自身的缺陷，这有利于继续讨论 React 的优势……

### React 优势


#### **JSX**

JSX 是 HTML 类似的语法并能编译成 JavaScript。标签和代码放在同一文件。这意味着代码自动补全帮助键入你引用的组件的函数和变量。相反，Angular 的基于字符串的模板带来常见的缺点：许多编辑器没有代码颜色区分、有限的代码补全支持、run-time 失效。通常这时候你会想到出错消息是不是也不行啊，但是 Angular 团队[创建了他们自己的 HTML 解析器来修复那个问题](https://github.com/angular/angular/issues/4417)（太棒了！）。


如果你不喜欢 Angular 基于字符串的模板，你可以把模板挪到独立的文件中，但是没有代码补全的支持与编译时校验的帮助，你需要同时记住两个文件，并在两个文件中切换。然而当你愉快地使用 React 时，这些都不是事儿。JSX 之所以如此特别，就是因为组件是由单个**编译时校验**的文件组成。

![](http://p5.qhimg.com/d/inn/8a99f370/2.jpg)

对比 Angular 2 与 React 是如何处理缺少闭合标签的。

想了解为什么 JSX 如此牛逼，请看这 [JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.5007n49wq)。

#### **React 报错精准迅速**


当你在 React JSX 中写了一个错字，JSX 就不会被编译。这是件好事。这意味着你能立刻正确地知道哪行出错了。当你忘记写闭合标签或你引用了一个不存在的属性时，它会立即通知你。实际上，**JSX 编译器会标明错误出现的行号**。这个行为从根本上加快了开发速度。

相反，当你在 Angular 2 中写错了变量引用，什么也不会发生。 **Angular 2 会在运行的时候悄悄地报错，而不是编译时报错**。它的报错很慢，我加载了应用却不知道为什么没有展示我的数据，很不爽。

#### **React 以 JavaScript 为中心**


这是 React 和 Angular 之间的本质区别。**不幸的是， Angular 2 依然保留以 HTML 为中心而不是以 JavaScript 为中心**。Angular 2 没有解决它本质的设计问题：

> Angular 2 将 “JS” 嵌入 HTML。React 将 “HTML” 嵌入 JS。

这种背道而驰的设计思路影响太大了，它从根本上影响着开发体验。 Angular 以 HTML 为中心的设计保持着它最大的弱点。正如我在 “[JSX: The Other Side of the Coin](https://medium.com/@housecor/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98#.jqh5kkxlk)”说的，JavaScript 比 HTML 更强悍。因此，强化 JavaScript 来支持标签比强调 HTML 来支持逻辑更可行。React 设法将 HTML 和 JavaScript 粘合在一起， React 的以 JavaScript 为中心方式从根本上优于 Angular、Ember 以及 Knockout 的以 HTML 为中心方式。

#### React 以 JavaScript 为中心的设计 = 简单

Angular 2 沿用了 Angular 1 试图让 HTML 更强大的方式。所以你必须为循环或条件分支等简单的任务使用 Angular 2 的独特语法。例如，Angular 2 通过两种语法提供了单向和双向数据绑定，不幸的是，这两种方式十分不同：

```
{{myVar}} //One-way binding
ngModel="myVar" //Two-way binding
```

在 React 里，绑定标签不会根据这种决定而改变（它是在其他地方被处理，我同意它应该是这样）。在任何情况下，它看起来是这样的：

`{myVar}`

使用这种语法，Angular 2 支持内联主模板：

```
&lt;ul&gt;
  <li *ngFor="#hero of heroes"
    {{hero.name}}
  &lt;/li&gt;
&lt;/ul&gt;
```


上面的代码片段是 `heros` 数组的遍历。我有几个问题：

*   通过一个程序星号来声明一个“主模板”是晦涩的。
*   `hero` 前面加 # 是声明一个本地模板变量。这个关键的概念看起来是不需要的鸡肋（如果想加，你可使用 `var`）。
*   通过一个 Angular 式声明的属性 `ngFor` 为 HTML 添加循环的语义。

相比上面 Angular 2 的语法，React 的语法是纯粹的 JS：

```
&lt;ul&gt;
  { heroes.map(hero =>
    &lt;li&gt;{hero.name}&lt;/li&gt;
  )};
&lt;/ul&gt;
```

因为 JS 原生支持循环，React 的 JSX 可以简单地利用所有的 JS 能力来处理这些事，并使用 map、filter 等做更多的事。

读一下 [Angular 2 Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)。那不是 HTML，也不是 JavaScript。它是 **_Angular_**。

> **为了阅读 Angular：**需要学习一长串 Angular 式声明的语法。
> **为了阅读 React：**只需要学习 JavaScript。

React 因它的语法和概念简单而独特。细想当下流行的框架或库的迭代循环：

```
Ember: {{# each}}
Angular 1: ng-repeat
Angular 2: ngFor
Knockout: data-bind=”foreach”
React: JUST USE JS. :)
```


除了 React，其它框架都重新发明了JavaScript中本来就有而且非常简单的**循环**。这就是 React 的美妙之处，它利用 JavaScript 的能力来处理标签，所以不需要新的奇怪的语法。

Angular 2 奇怪的语法也沿用在 `click` 绑定：

`(click)=”onSelect(hero)"`


相反，React 再一次使用了普通的 JavaScript 语法：

`onClick={this.onSelect.bind(this, hero)}`

因为 React 包含了一个综合事件系统（Angular 2 也有），因此你不必担心像这样内联声明的事件处理的性能影响。



#### 奢华的开发体验

JSX 的代码补全支持、编译时校验以及丰富的错误消息已经创建了非常棒的开发体验，并能减少输入节省时间。

[![](http://p8.qhimg.com/d/inn/981fb780/3.png)](https://youtu.be/xsSnOQynTHs)

#### 大小问题

这有几个值得关注的框架或库压缩之后的大小：

**Ember:** 580k    
**Angular 2:** 565k (759k with RxJS)    
**Angular 1:** 324k    
**React + Redux:** 204k    


为了做一个真实的比较，我分别使用 Angular 2 和 React 来搭建 “Angular 2’s Tour of Heroes” 应用（我使用新的 [React Slingshot](https://github.com/coryhouse/react-slingshot) 初学者工具包）。结果是？

[**Angular 2**](https://github.com/coryhouse/angular-2-tour-of-heroes/tree/master)**:** 764k 压缩后    
[**React + Redux**](https://github.com/coryhouse/react-tour-of-heroes)**:** 216k 压缩后    


因此**简单比较后，Angular 2 的应用大小比 React + Redux 的应用要大 3 倍多**。

我承认关于框架尺寸的担忧可能被夸大了：

> 大型应用很容易达到几百 K 的代码底线，不管它们是否使用了框架构建，结果往往会超过这个底线。开发者为了构建复杂的软件需要将其抽象化，无论这些抽象化来自框架还是手写，都会对应用造成负面影响。

> 即使你完全去掉框架，许多应用仍然后几百 K 的 JavaScript。—— 摘自 Tom 的 [JavaScript Frameworks and Mobile Performance](http://tomdale.net/2015/11/javascript-frameworks-and-mobile-performance/)。


Tom 的观点是对的。像 Angular 和 Ember 这样的框架是很大的，因为他们提供了应用之外的功能。

但是，我的疑问是：许多应用不需要将这些大框架全部放在里面。换句话说，越来越多的人拥抱微型服务、微型应用以及[单独维护的程序包](http://www.npmjs.com)，**React 让你可以根据你选择的必需的功能来限制你的应用大小**。在一个有着 [200,000 个 npm 模块](http://www.modulecounts.com)的世界里，这绝对是强大的地方。

#### React 信奉 [Unix 哲学](https://en.wikipedia.org/wiki/Unix_philosophy).

React 是一个库。它恰恰是与那些大型的、全面的框架如 Angular 和 Ember 的思想相反。那么当你选择了 React，你可以自由选择当下最好的库来最优地解决你的问题。JavaScript 发展很快，而 React 允许你用更好的库来替换你的应用程序的局部，而不是等待和期盼你的框架做创新。

Unix 已接受住了时间的考验，原因是：

> 拥有小、可组装性、目的单一的思想的工具永远不会落伍。

React 作为焦点集中、可组装以及目的单一的工具被用在[世界上许多大型的网站](https://github.com/facebook/react/wiki/Sites-Using-React)。这预示着它的未来前途光明（那就是说，Angular 也被用于[许多大牌网站](https://www.madewithangular.com/#/)）。

#### 对比汇总

Angular 2 相比版本 1 有很大的改进。新的组件模型比 V1 的指令容易掌握，它支持同构或万能的渲染，并且它使用了 virtual DOM 提供了 3-10 倍的性能提升。这些改进使得 Angular 2 同 React 非常具有竞争力。不可否认的是，它的功能齐全、执着的天性提供了一些明显的好处，减少了 “JavaScript 疲劳”。

但是，Angular 2 的大小和语法让我犹豫。Angular 致力于以 HTML 为中心，相对于以简单的 JavaScript 为中心模型的 React，Angular 更复杂。使用 React，你不需要学习框架的声明 HTML 语法例如 ngxxx。

* * *
**_Cory House_** 是“[使用 React 和 Flux 构建应用程序](https://www.pluralsight.com/courses/react-flux-building-applications)”、 “[Clean Code: Writing Code for Humans](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiK1pXx89nJAhUujoMKHeuWAEUQFggcMAA&url=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fwriting-clean-code-humans&usg=AFQjCNEBfkBoN-IgCn_1jFUqWDAUIxcmAw&sig2=Ub9Wup4k4mrw_ffPgYu3tA)” 的作者，并在 Pluralsight 上发布了许多其他的课程。他是 VinSolutions 的软件架构师，并[在全球培训软件开发者](http://www.bitnative.com/training/)，像前端开发以及整理代码等软件实践等内容。Cory 是一名 Microsoft MVP，Telerik 开发专家，[outlierdeveloper.com](http://www.outlierdeveloper.com) 创始人。

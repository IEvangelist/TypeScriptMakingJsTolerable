---?image=assets/ts-main.png&size=contain
<br/>
<br/>
[@davidpine7](https://twitter.com/davidpine7) | [davidpine.net](http://davidpine.net/)
<br/>
### @size[1.1em](@css[soft-shadow](Making @color[orange](JavaScript) Tolerable))
---
# What
> What is @color[deepskyblue](TypeScript) anyways?
---
## But First ... @color[orange](JavaScript)
- Appeared in May, 1995
- Dynamic, untyped and interpreted language
- Worlds 3rd most popular programming language (_Java_ and _SQL_)
---
## @color[orange](JavaScript)
> @color[orange](JavaScript) was originally "prototyped" in 10 days by Brenden Eich
---?image=assets/face-palm.gif&size=auto 90%
<br/><br/><br/><br/><br/><br/>
<h2 class="flash shadow">@color[lime](... that explains a lot)</h2>
---
## @color[orange](JavaScript) `this`
Example from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
```javascript
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)         // "MDN"
```

---
## @color[orange](JavaScript) Books
<img src="assets/good-parts.jpg" height="450" />

---?image=assets/new-sheriff.jpg&size=contain
---
## @color[deepskyblue](TypeScript)
- October, 2012 (17 years after @color[orange](JavaScript))
- A superset of @color[orange](JavaScript)
  - Any valid @color[orange](JavaScript) is also valid @color[deepskyblue](TypeScript)
- Anders Hejlsberg
  - @color[magenta]($1,000,000) signing bonus with @color[gray](Microsoft)
---

> JavaScript was intended for 100 to 1,000 lines of code. Now with regularity, applications are 100,000 to 1,000,000 lines of code!

[Anders Hejlsberg](https://twitter.com/ahejlsberg)
---
## @color[deepskyblue](TypeScript)
- @color[deepskyblue](TypeScript) files have the `*.ts` file extension
- Backwards compatibility to @color[limegreen](ECMAScript 3)
- Any browser, any host, and OS
- Modern (__Node.js__ and __VS/Code__ Tooling)
- Open Source
- Supports latest @color[orange](JavaScript) features
---
## @color[orange](JavaScript) was simply not designed to scale!
---?image=assets/only-you-can-prevent-js.jpg&size=contain

---?image=assets/demo.png&size=contain
# Demo

---?image=assets/a-cure-for-the-common.jpg&size=contain
---
# Why
> Why should I care about @color[deepskyblue](TypeScript)?
---
<img src="assets/reddit.png" height="180" />
> Must have types, power major production apps and our devs should be able to onboard fairly quickly

[Niranjan Ramadas](https://redditblog.com/2017/06/30/why-we-chose-typescript/)
---
<img src="assets/angular.png" height="180" />
> @color[deepskyblue](TypeScript) Makes Code Easier to Read and Understand 
 
[Victor Savkin](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8)
---
<img src="assets/slack.png" height="180" />
> A smart static type checker increases our confidence in our code, catches easily made mistakes before they are committed, and makes the code base more self-documenting.

[Felix Rieseberg](https://slack.engineering/typescript-at-slack-a81307fa288d)
---
# Top 5 @color[darkred](Reasons)
---
## 5. Compatibility
>@color[orange](JavaScript) is standardized through the @color[limegreen](ECMAScript) standards, unfortunately not all browsers in use support all features of newer @color[limegreen](ECMAScript) standards
---?image=assets/feature-gap.gif&size=contain
---
## 5. Compatibility
- Latest Features
- Backwards compatible all the way to @color[limegreen](ES3)
- `tsconfig.json`

```json
{
  target: [ "es3", "es5", "es2015", "es2016", "es2017", "esnext" ]
}
```
---
## 4. Tooling
> @color[deepskyblue](TypeScript's) language services are a first class citizen

- Statement Completion
- Refactoring
- __Immediate__ Feedback Loop
---?image=assets/tools.png&size=contain
---

## 3. Open Source
![](assets/github-logo.png)
- See source
- Post issues
- Propose new features
---
## 2. Type System
- Basic Types
- Advanced Types
- Classes, Interfaces and Abstract classes
- `Generics<T, TResult>`
- Type Assertions, Type Guards and Type Aliases
- Polymorphic `this`
---?image=assets/mind-blown.gif&size=contain
## @css[shadow](@color[magenta](1. Compilation))
---?image=assets/demo.png&size=contain

# Demo
---?image=assets/stead-now.jpg&size=contain

---
# How
> How can I use @color[deepskyblue](TypeScript)?

---?code=source/basic.ts&lang=ts
@[1-3](LOL: Interfaces @fa[meh-o])
@[5-9](WTF: Implementations @fa[smile-o])
@[11-19](OMG: Basic Types @fa[frown-o])
@[21-30](TIL: Enums @fa[thumbs-o-up])

---?image=assets/demo.png&size=contain
# Demo

---
# File @color[tomato](Extensions)
---?image=assets/file-extensions.png&size=contain

---
# Adoption
---?image=assets/adoption.png&size=contain

---
# Thank you
<img src="assets/me.jpg" height="325" />
<br/>
[@davidpine7](https://twitter.com/davidpine7) | [davidpine.net](http://davidpine.net/)
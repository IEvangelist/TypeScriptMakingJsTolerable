---?image=assets/ts-main.png&size=contain
<br/>
<br/>
[@davidpine7](https://twitter.com/davidpine7) | [davidpine.net](http://davidpine.net/)
<br/>
## <span style="font-weight: bold; color: orange">Making JavaScript Tolerable</span>
---
# What
> What is TypeScript anyways?
---
## JavaScript
- Appeared in May, 1995
- Dynamic, untyped and interpreted langauge
- Worlds 3rd most popular programming language (Java and SQL)
---
## JavaScript
> JavaScript was originally developed in 10 days by Brenden Eich
---?image=assets/face-palm.gif&size=auto 90%
---
# That explains a lot!
---
## JavaScript `this`
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
---?image=assets/new-sheriff.jpg&size=contain
---
## TypeScript
- October, 2012 (17 years after JavaScript)
- Anders Hejlsberg
  - $1,000,000 signing bonus with Microsoft
---
> JavaScript was intended for 100 to 1,000 lines of code. Now with regularity, applications are 100,000 to 1,000,000 lines of code!
> -- <cite>Anders Hejlsberg</cite>
---
## JavaScript was simply not designed to scale!!
---?image=assets/only-you-can-prevent-js.jpg&size=contain
---?image=assets/demo.png&size=contain
# Demo
---?image=assets/a-cure-for-the-common.jpg&size=contain
---
# Why
> Why should I care about TypeScript?
---
<img src="assets/reddit.png" height="180" />
- Must have types
- Powers major production apps
- Our devs should be able to onboard fairly quickly

[Niranjan Ramadas](https://redditblog.com/2017/06/30/why-we-chose-typescript/)
---
<img src="assets/angular.png" height="180" />
> TypeScript Makes Code Easier to Read and Understand 

[Victor Savkin](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8)
---
<img src="assets/slack.png" height="180" />
> A smart static type checker increases our confidence in our code, catches easily made mistakes before they are committed, and makes the code base more self-documenting.

[Felix Rieseberg](https://slack.engineering/typescript-at-slack-a81307fa288d)
---
# Top 5 Reasons
---
## 5. Compatibility
>JavaScript is standardized through the ECMAScript standards, unfortunately not all browsers in use support all features of newer ECMAScript standards
---?image=assets/feature-gap.gif&size=contain
---
## 5. Compatibility
- Latest Features
- Backwards compatible all the way to ES3
- `tsconfig.json`

```json
{
  target: [ "es3", "es5", "es2015", "es2016", "es2017", "esnext" ]
}
```
---
## 4. Tooling
> TypeScript's language services are a first class citizen

- Statement Completion
- Refactoring
- Immediate Feedback Loop
---?image=assets/tools.png&size=contain
---

## 3. Open Source
![](assets/github-logo.png)
- See source
- Post issues
- Propose new features
---?image=assets/wat.gif&size=contain
---
## 2. Type System
- Basic Types
- Advanced Types
- Classes, Interfaces and Abstract classes
- `Generics<T, TResult>`
- Type Assertions, Type Guards and Type Aliases
- Polymorphic `this`
---

## 1. Compilation
---?image=assets/demo.png&size=contain
# Demo
---?image=assets/stead-now.jpg&size=contain
---
# How
> How can I use TypeScript?
---
## Interface & Class
```typescript
interface Foo {
    nonsense(): string;
}

class Bar implements Foo {
    nonsense(): string {
        return "Hello, WI .NET User Group!";
    }
}
```
---
## Types
```typescript
class Types {
    trueOrFalse: boolean = true;
    message: string = "Hi there";
    value: number = 7;
    tuple: [string, Date] = ["David", new Date(1984, 7, 7)];
    children: Types[] = [];
    nothing = null;
    nonExistent = undefined;
}
```
---
## Enum
```typescript
enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
```
---?image=assets/demo.png&size=contain
# Demo
---
# File Extensions
---?image=assets/file-extensions.png&size=contain
---
# Adoption
---?image=assets/adoption.png&size=contain
---
# Thank you
<img src="assets/me.jpg" height="325" />
<br/>
[@davidpine7](https://twitter.com/davidpine7) | [davidpine.net](http://davidpine.net/)
---

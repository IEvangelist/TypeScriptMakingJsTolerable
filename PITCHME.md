# TypeScript
### Making JavaScript Tolerable
[@davidpine7](https://twitter.com/davidpine7) | [davidpine.net](http://davidpine.net/)
---
# What
---
## JavaScript
> JavaScript was originally developer in 10 days by Brenden Eich
---?image=assets/face-palm.gif&size=auto 90%
---
## JavaScript
- Appeared in May, 1995
- Dynamic, untyped and interpreted langauge
- Worlds 3rd most popular programming language (Java and SQL)
---
## TypeScript
- October, 2012 (17 years after JavaScript)
- Anders Hejlsberg
  - $1,000,000 signing bonus with Microsoft
---
> JavaScript was intended for 100 to 1,000 lines of code. Now with regularity, applications are 100,000 to 1,000,000 lines of code!
>
> - _Anders Hejlsberg_
---
# Why
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

# How
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

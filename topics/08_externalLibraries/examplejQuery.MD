Steps:

`yarn add jquery`

*app.ts*
```typescript
    import jQuery from ('jquery');

    $("#app").css({"background-color": "green"});
```

**After TS 2.0**

1. `yarn add @types/jquery -D`


**Alternative 1: Grab the translation manually**

1. Grab it via [dt](https://github.com/DefinitelyTyped/DefinitelyTyped)
2. Paste raw code to `jquery.d.ts`

**Alternative 2: With "typings" package manager**

1. `npm install -g typings`
2. `typings install dt~jquery --global --save` via DefinitelyTyped
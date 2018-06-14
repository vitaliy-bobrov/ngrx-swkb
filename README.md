# NgRx Star Wars Knowledge Base

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Commands to generate parts

1. Create new project:
```bash
  ng new swkb -p=swkb --style=scss

  cd swkb
```

2. Create basic structure:
```bash
  ng g module heroes

  ng g component heroes/hero-list

  ng g component heroes/hero

  ng g interface heroes/models/Hero

  ng g service heroes/swapi

  ng add @angular/material
```

3. Add NgRx & Schematics
```bash
  yarn add @ngrx/{store,effects,entity,store-devtools}

  yarn add -D @ngrx/schematics

  ng config cli.defaultCollection @ngrx/schematics

  ng g store State --root --module=app.module.ts

  ng g effect App --root --module=app.module.ts
```

  ### NgRx ng-add Future
    - ng add @ngrx/store
    - ng add @ngrx/effects
    - ng add @ngrx/store-devtools

```bash
  ng g feature heroes/Heroes --reducers=../reducers/index.ts
```

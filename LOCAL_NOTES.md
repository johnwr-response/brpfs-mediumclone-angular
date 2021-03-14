


# Angular and NgRx - Building Real Project From Scratch

## Log
### Section: Preparing Tools
- Bootstrapping project
```
# See init section
# Delete content of app.component.html exept some test text like "Hello angular"
# delete app.component.spec.ts
# remove title property from app.component.ts
```

- Why NgRx?
  - State!
- Project structure
  - Strict naming
  - Folder for each page / module
  - Page name
    - components
     - All components needed for this module
    - services (mostly API calls)
    - store
      - state and ngrx
    - types
      - interfaces and types used in this module
    - shared (all shared stuff used by more than one page/module)
      - modules
        - a module
          - components
          - services
          - store
          - types
- Prettier
```
npm install prettier --save-dev --save-exact
```
- Language server

### Section: Registration
- Register module
```
md auth
md auth/components
md auth/components/register
ni register.component.ts -type file
ni register.component.scss -type file
ni register.component.html -type file
```

### Section: Authentication

### Section: Feed

### Section: Article Pages

### Section: Profiles

### Section: Homework

## init
```
node -v
npm -v
ng --version
ng new mediumclone-angular
# strict: no
# routing: yes
# Stylesheet: SCSS
cd mediumclone-angular
ng serve
# See Github setup section
git branch -M main
git push -u origin main
git add LOCAL_NOTES.md
```

## Github setup
```
git remote add origin https://github.com/johnwr-response/brpfs-mediumclone-angular.git
```

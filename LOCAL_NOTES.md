


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
md src/app/auth
md src/app/auth/components
md src/app/auth/components/register
ni src/app/auth/components/register/register.component.ts -type file
ni src/app/auth/components/register/register.component.scss -type file
ni src/app/auth/components/register/register.component.html -type file
```
- Register layout
- Installing NgRx
```
yarn add @ngrx/store
md src/app/auth/store
ni src/app/auth/store/actionTypes.ts -type file
ni src/app/auth/store/actions.ts -type file
```
- Installing Redux Devtools
```
yarn add @ngrx/store-devtools
```
- Creating auth interfaces
```
md src/app/shared/types
ni src/app/shared/types/currentUser.interface.ts -type file
md src/app/auth/types
ni src/app/auth/types/registerRequest.interface.ts -type file
```
- Adding auth reducer
```
ni src/app/auth/types/authState.interface.ts -type file
ni src/app/auth/store/reducers.ts -type file
```
- Creating selectors
```
ni src/app/auth/store/selectors.ts -type file
ni src/app/shared/types/appState.interface.ts -type file
```
- Register service
```
md src/app/auth/services
ni src/app/auth/services/auth.service.ts -type file
ni src/app/auth/types/authResponse.interface.ts -type file
```
- Register effects
```
md src/app/auth/store/actions
ni src/app/auth/store/actions/register.action.ts -type file
md src/app/auth/store/effects
ni src/app/auth/store/effects/register.effect.ts -type file
yarn add @ngrx/effects
```
- Updating auth reducers
```
ni src/app/shared/types/backendErrors.interface.ts -type file
```
- Backend error messages
```
md src/app/shared/modules/backendErrorMessages/components/backendErrorMessages
ni src/app/shared/modules/backendErrorMessages/backendErrorMessages.module.ts -type file
ni src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.ts -type file
ni src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.html -type file
ni src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component.scss -type file
```
- Persistence service
```
md src/app/shared/services
ni src/app/shared/services/persistence.service.ts -type file
```

### Section: Authentication
- Login store
```
ni src/app/auth/types/loginRequest.interface.ts -type file
ni src/app/auth/store/actions/login.action.ts -type file
ni src/app/auth/store/effects/login.effect.ts -type file
```

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




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
- Login component
```
md src/app/auth/components/login
ni src/app/auth/components/login/login.component.ts -type file
ni src/app/auth/components/login/login.component.scss -type file
ni src/app/auth/components/login/login.component.html -type file
```
- TopBar
```
md src/app/shared/modules/topBar/components/topBar
ni src/app/shared/modules/topBar/topBar.module.ts -type file
ni src/app/shared/modules/topBar/components/topBar/topBar.component.ts -type file
ni src/app/shared/modules/topBar/components/topBar/topBar.component.scss -type file
ni src/app/shared/modules/topBar/components/topBar/topBar.component.html -type file
```
- Fetching current user
```
ni src/app/auth/store/actions/getCurrentUser.action.ts -type file
ni src/app/auth/store/effects/getCurrentUser.effect.ts -type file
```
- Auth interceptor
```
ni src/app/shared/services/authInterceptor.service.ts -type file
```

### Section: Feed
- Planning the feed
- Creating feed module
```
md src/app/globalFeed
ni src/app/globalFeed/globalFeed.module.ts -type file
md src/app/globalFeed/components/globalFeed
ni src/app/globalFeed/components/globalFeed/globalFeed.component.ts -type file
ni src/app/globalFeed/components/globalFeed/globalFeed.component.scss -type file
ni src/app/globalFeed/components/globalFeed/globalFeed.component.html -type file
md src/app/shared/modules/feed/components/feed
ni src/app/shared/modules/feed/feed.module.ts -type file
ni src/app/shared/modules/feed/components/feed/feed.component.ts -type file
ni src/app/shared/modules/feed/components/feed/feed.component.scss -type file
ni src/app/shared/modules/feed/components/feed/feed.component.html -type file
```
- Preparing feed store
```
md src/app/shared/modules/feed/services
ni src/app/shared/modules/feed/services/feed.service.ts -type file
md src/app/shared/modules/feed/types
ni src/app/shared/modules/feed/types/getFeedResponse.interface.ts -type file
ni src/app/shared/types/article.interface.ts -type file
ni src/app/shared/types/profile.interface.ts -type file
md src/app/shared/modules/feed/store
ni src/app/shared/modules/feed/store/actionTypes.ts -type file
md src/app/shared/modules/feed/store/actions
ni src/app/shared/modules/feed/store/actions/getFeed.action.ts -type file
md src/app/shared/modules/feed/store/effects
ni src/app/shared/modules/feed/store/effects/getFeed.effect.ts -type file
ni src/app/shared/modules/feed/types/feedState.interface.ts -type file
ni src/app/shared/modules/feed/store/reducers.ts -type file
```
- Getting feed data
```
ni src/app/shared/modules/feed/store/selectors.ts -type file
```
- Helper components
```
md src/app/shared/modules/banner
ni src/app/shared/modules/banner/banner.module.ts -type file
md src/app/shared/modules/banner/components/banner
ni src/app/shared/modules/banner/components/banner/banner.component.ts -type file
ni src/app/shared/modules/banner/components/banner/banner.component.scss -type file
ni src/app/shared/modules/banner/components/banner/banner.component.html -type file
md src/app/shared/modules/errorMessage
ni src/app/shared/modules/errorMessage/errorMessage.module.ts -type file
md src/app/shared/modules/errorMessage/components/errorMessage
ni src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.ts -type file
ni src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.scss -type file
ni src/app/shared/modules/errorMessage/components/errorMessage/errorMessage.component.html -type file
md src/app/shared/modules/loading
ni src/app/shared/modules/loading/loading.module.ts -type file
md src/app/shared/modules/loading/components/loading
ni src/app/shared/modules/loading/components/loading/loading.component.ts -type file
ni src/app/shared/modules/loading/components/loading/loading.component.scss -type file
ni src/app/shared/modules/loading/components/loading/loading.component.html -type file
```
- Creating pagination
- Creating pagination #2
```
md src/app/shared/modules/pagination
ni src/app/shared/modules/pagination/pagination.module.ts -type file
md src/app/shared/modules/pagination/components/pagination
ni src/app/shared/modules/pagination/components/pagination/pagination.component.ts -type file
ni src/app/shared/modules/pagination/components/pagination/pagination.component.scss -type file
ni src/app/shared/modules/pagination/components/pagination/pagination.component.html -type file
ni src/app/shared/services/utils.service.ts -type file
```
- ReFetching feed
```
yarn add query-string
yarn add @ngrx/router-store
```
- Implementing tag list
```
md src/app/shared/modules/tagList
ni src/app/shared/modules/tagList/tagList.module.ts -type file
md src/app/shared/modules/tagList/components/tagList
ni src/app/shared/modules/tagList/components/tagList/tagList.component.ts -type file
ni src/app/shared/modules/tagList/components/tagList/tagList.component.scss -type file
ni src/app/shared/modules/tagList/components/tagList/tagList.component.html -type file
ni src/app/shared/types/popularTag.type.ts -type file
```
- Implementing popular tags
```
md src/app/shared/modules/popularTags
ni src/app/shared/modules/popularTags/popularTags.module.ts -type file
ni src/app/shared/services/popularTags.service.ts -type file
md src/app/shared/modules/popularTags/types
ni src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface.ts -type file
md src/app/shared/modules/popularTags/store
ni src/app/shared/modules/popularTags/store/actionTypes.ts -type file
md src/app/shared/modules/popularTags/store/actions
ni src/app/shared/modules/popularTags/store/actions/getPopularTags.action.ts -type file
md src/app/shared/modules/popularTags/store/effects
ni src/app/shared/modules/popularTags/store/effects/getPopularTags.effect.ts -type file
ni src/app/shared/modules/popularTags/types/popularTagsState.interface.ts -type file
ni src/app/shared/modules/popularTags/store/reducers.ts -type file
ni src/app/shared/modules/popularTags/store/selectors.ts -type file
md src/app/shared/modules/popularTags/components/popularTags
ni src/app/shared/modules/popularTags/components/popularTags/popularTags.component.ts -type file
ni src/app/shared/modules/popularTags/components/popularTags/popularTags.component.scss -type file
ni src/app/shared/modules/popularTags/components/popularTags/popularTags.component.html -type file
```
- Adding feed toggle
```
md src/app/shared/modules/feedToggle
ni src/app/shared/modules/feedToggle/feedToggle.module.ts -type file
md src/app/shared/modules/feedToggle/components/feedToggle
ni src/app/shared/modules/feedToggle/components/feedToggle/feedToggle.component.ts -type file
ni src/app/shared/modules/feedToggle/components/feedToggle/feedToggle.component.scss -type file
ni src/app/shared/modules/feedToggle/components/feedToggle/feedToggle.component.html -type file
```
- Creating other feeds
```
md src/app/yourFeed
ni src/app/yourFeed/yourFeed.module.ts -type file
md src/app/yourFeed/components/yourFeed
ni src/app/yourFeed/components/yourFeed/yourFeed.component.ts -type file
ni src/app/yourFeed/components/yourFeed/yourFeed.component.scss -type file
ni src/app/yourFeed/components/yourFeed/yourFeed.component.html -type file
md src/app/tagFeed
ni src/app/tagFeed/tagFeed.module.ts -type file
md src/app/tagFeed/components/tagFeed
ni src/app/tagFeed/components/tagFeed/tagFeed.component.ts -type file
ni src/app/tagFeed/components/tagFeed/tagFeed.component.scss -type file
ni src/app/tagFeed/components/tagFeed/tagFeed.component.html -type file
```

### Section: Article Pages
- Creating article page
```
md src/app/article
ni src/app/article/article.module.ts -type file
ni src/app/shared/services/article.service.ts -type file
ni src/app/shared/types/getArticleResponse.interface.ts -type file
md src/app/article/store
ni src/app/article/store/actionTypes.ts -type file
md src/app/article/store/actions
ni src/app/article/store/actions/getArticle.action.ts -type file
md src/app/article/store/effects
ni src/app/article/store/effects/getArticle.effect.ts -type file
md src/app/article/types
ni src/app/article/types/articleState.interface.ts -type file
ni src/app/article/store/reducers.ts -type file
ni src/app/article/store/selectors.ts -type file

```

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

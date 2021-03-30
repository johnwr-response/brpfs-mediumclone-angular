import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {AppComponent} from 'src/app/app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import {environment} from 'src/environments/environment'
import {TopBarModule} from 'src/app/shared/modules/topBar/topBar.module'
import {PersistenceService} from 'src/app/shared/services/persistence.service'
import {AuthInterceptor} from 'src/app/shared/services/authInterceptor.service'
import {GlobalFeedModule} from 'src/app/globalFeed/globalFeed.module'
import {YourFeedModule} from 'src/app/yourFeed/yourFeed.module'
import {TagFeedModule} from 'src/app/tagFeed/tagFeed.module'
import {CreateArticleModule} from 'src/app/createArticle/createArticle.module'
import {EditArticleModule} from 'src/app/editArticle/editArticle.module'
import {ArticleModule} from 'src/app/article/article.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({router: routerReducer}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    EditArticleModule,
    ArticleModule,
  ],
  providers: [
    PersistenceService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

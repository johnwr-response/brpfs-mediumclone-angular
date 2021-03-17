import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {HttpClientModule} from '@angular/common/http'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import {environment} from 'src/environments/environment'
import {TopBarModule} from 'src/app/shared/modules/topBar/topBar.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {ArticleService} from 'src/app/shared/services/article.service'
import {ArticleComponent} from 'src/app/article/components/article/article.component'
import {reducers} from 'src/app/article/store/reducers'
import {GetArticleEffect} from 'src/app/article/store/effects/getArticle.effect'
import {TagListModule} from '../shared/modules/tagList/tagList.module'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ErrorMessageModule} from '../shared/modules/errorMessage/errorMessage.module'

const routes = [{path: 'articles/:slug', component: ArticleComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}

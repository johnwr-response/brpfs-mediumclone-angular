import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {FeedComponent} from 'src/app/shared/modules/feed/components/feed/feed.component'
import {reducers} from 'src/app/shared/modules/feed/store/reducers'
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {PaginationModule} from 'src/app/shared/modules/pagination/pagination.module'
import {TagListModule} from 'src/app/shared/modules/tagList/tagList.module'
import {ArticleService} from 'src/app/shared/services/article.service'
import {GetArticleEffect} from 'src/app/article/store/effects/getArticle.effect'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [ArticleService],
})
export class ArticleModule {}

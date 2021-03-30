import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {filter, map} from 'rxjs/operators'
import {select, Store} from '@ngrx/store'
import {ArticleInputInterface} from 'src/app/shared/types/articleInput.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/editArticle/store/selectors'
import {updateArticleAction} from 'src/app/editArticle/store/actions/updateArticle.action'
import {getArticleAction} from 'src/app/editArticle/store/actions/getArticle.action'
import {ActivatedRoute, Router} from '@angular/router'
import {ArticleInterface} from '../../../shared/types/article.interface'

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        }
      })
    )
  }

  private fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}))
  }
}

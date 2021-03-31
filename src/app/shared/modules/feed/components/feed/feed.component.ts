import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {ActivatedRoute, Router, Params} from '@angular/router'
import {parseUrl, stringify} from 'query-string'
import {environment} from 'src/environments/environment'
import {getFeedAction} from 'src/app/shared/modules/feed/store/actions/getFeed.action'
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps: string

  feed$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes.apiUrlProps.firstChange &&
      changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue
    if (isApiUrlChanged) {
      this.fetchFeed()
    }
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  private initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  private initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        console.log('params', params)
        this.currentPage = Number(params.page || '1')
        this.fetchFeed()
      }
    )
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrlProps)
    // noinspection SpellCheckingInspection
    const stringifiedParams = stringify({
      limit: this.limit,
      offset: offset,
      ...parsedUrl.query,
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    console.log('apiUrlWithParams', apiUrlWithParams)
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }
}

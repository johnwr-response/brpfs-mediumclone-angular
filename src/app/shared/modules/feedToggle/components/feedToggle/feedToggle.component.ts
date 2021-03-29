import {Component, Input, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {isLoggedInSelector} from 'src/app/auth/store/selectors'

@Component({
  selector: 'mc-feed-toggle',
  templateUrl: './feedToggle.component.html',
  styleUrls: ['./feedToggle.component.scss'],
})
export class FeedToggleComponent implements OnInit {
  @Input('tagName') tagNameProps: string

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
  }

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}

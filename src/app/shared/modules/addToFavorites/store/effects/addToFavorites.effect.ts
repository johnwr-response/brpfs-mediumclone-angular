import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'
import {AddToFavoritesService} from 'src/app/shared/modules/addToFavorites/store/services/addToFavorites.service'
import {
  addToFavoritesAction,
  addToFavoritesSuccessAction,
  addToFavoritesFailureAction,
} from 'src/app/shared/modules/addToFavorites/store/actions/addToFavorites.action'
import {ArticleInterface} from 'src/app/shared/types/article.interface'

@Injectable()
export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({isFavorite, slug}) => {
        const article$ = isFavorite
          ? this.addToFavoritesService.removeFromFavorites(slug)
          : this.addToFavoritesService.addToFavorites(slug)
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({article})
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService
  ) {}
}

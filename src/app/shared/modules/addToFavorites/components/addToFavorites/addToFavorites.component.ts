import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorite') isFavoriteProps: boolean
  @Input('favoritesCount') favoritesCountProps: number
  @Input('articleSlug') articleSlugProps: string

  favoritesCount: number
  isFavorite: boolean

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorite = this.isFavoriteProps
  }

  handleLike(): void {
    // TODO: implement like or unlike
    if (this.isFavorite) {
      this.favoritesCount = this.favoritesCount - 1
    } else {
      this.favoritesCount = this.favoritesCount + 1
    }
    this.isFavorite = !this.isFavorite
  }
}

import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {YourFeedComponent} from 'src/app/yourFeed/components/yourFeed/yourFeed.component'
import {FeedModule} from 'src/app/shared/modules/feed/feed.module'
import {BannerModule} from 'src/app/shared/modules/banner/banner.module'
import {PopularTagsModule} from 'src/app/shared/modules/popularTags/popularTags.module'
import {FeedToggleModule} from 'src/app/shared/modules/feedToggle/feedToggle.module'

const routes = [{path: 'feed', component: YourFeedComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedToggleModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}

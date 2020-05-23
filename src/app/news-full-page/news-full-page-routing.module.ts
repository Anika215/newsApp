import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFullPagePage } from './news-full-page.page';

const routes: Routes = [
  {
    path: '',
    component: NewsFullPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsFullPagePageRoutingModule {}

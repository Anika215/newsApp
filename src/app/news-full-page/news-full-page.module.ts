import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsFullPagePageRoutingModule } from './news-full-page-routing.module';

import { NewsFullPagePage } from './news-full-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsFullPagePageRoutingModule
  ],
  declarations: [NewsFullPagePage]
})
export class NewsFullPagePageModule {}

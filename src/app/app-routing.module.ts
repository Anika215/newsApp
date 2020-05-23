import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "news",
    pathMatch: "full",
  },
  {
    path: "news",
    loadChildren: () =>
      import("./news/news.module").then((m) => m.NewsPageModule),
  },
  {
    path: 'news-full-page',
    loadChildren: () => import('./news-full-page/news-full-page.module').then( m => m.NewsFullPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

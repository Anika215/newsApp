import { Component, OnInit } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-full-page",
  templateUrl: "./news-full-page.page.html",
  styleUrls: ["./news-full-page.page.scss"],
})
export class NewsFullPagePage implements OnInit {
  article;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
}

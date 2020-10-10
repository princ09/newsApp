import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { News } from 'src/app/shared/modal/news';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent implements OnInit {
  constructor(public newsService:NewsService , public dialogRef: MatDialogRef<AddNewsComponent>,
    private router:Router) { }

  ngOnInit() {}
  onClear(){
    this.newsService.form.reset();
  }
  addNews(){
    let news:News = new News();
    if(this.newsService.form.valid){
      news.sourcename = this.newsService.form.get("sourcename").value;
      news.author = this.newsService.form.get("author").value;
      news.title = this.newsService.form.get("title").value;
      news.description = this.newsService.form.get("description").value;
      news.urlToImage =this.newsService.form.get("urlToImage").value;
      news.publishedAt = this.newsService.form.get("publishedAt").value;
      news.content = this.newsService.form.get("content").value;
      this.newsService.addNews(news);
      this.dialogRef.close();
    }
    

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

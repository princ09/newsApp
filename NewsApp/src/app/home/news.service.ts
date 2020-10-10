import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../shared/modal/news';
import { NotifierService } from 'angular-notifier';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  notifier: NotifierService;
  News:News[] = [];

  form:FormGroup = new FormGroup({
    author : new FormControl('',[Validators.required, Validators.pattern('[A-Za-z0-9 ]+')]),
    title : new FormControl('',[Validators.required, Validators.pattern('[A-Za-z0-9 ]+')]),
    description : new FormControl('',[Validators.required, Validators.pattern('[A-Za-z0-9 ]+')]),
    urlToImage : new FormControl('',[Validators.required, Validators.pattern('[A-Za-z0-9 ]+')]),
    publishedAt : new FormControl('',[Validators.required]),
    content: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z0-9 ]+')]),
  })

  constructor(private httpClient: HttpClient,notifier: NotifierService) {
    this.notifier = notifier;
   }
  getNews():Observable<News[]>{
    return this.httpClient.get<News[]>("http://localhost:8808/NewsAPI/newsAPI/getnews");
  }
  addNews(news:News){
    this.httpClient.post<News>("http://localhost:8808/FinancialGoals/financialGoal/addGoal",news).subscribe(
      data=>{
        this.News.push(data);
        this.notifier.notify("success", "You are awesome!You Added a News : "+data.title+"!!");

      },
      error => this.notifier.notify("error", error.error.message)
    );
  }
}

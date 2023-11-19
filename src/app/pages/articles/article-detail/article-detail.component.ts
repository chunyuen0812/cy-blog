import { Component } from '@angular/core';
import { articles } from 'app/shared/mock-data/mock-data';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-article-detail',
    templateUrl: 'article-detail.component.html'
})

export class ArticleDetailComponent implements OnInit{

    articles:any = articles;

    ngOnInit(): void {
        console.log(articles)
    }
    
}

import { Component } from '@angular/core';
import { articles } from 'app/shared/mock-data/mock-data';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-articles',
    templateUrl: 'articles.component.html'
})

export class ArticlesComponent implements OnInit{

    articles:any = articles;

    ngOnInit(): void {
        console.log(articles)
    }
    
}
import { Component } from '@angular/core';
import { articles } from 'app/shared/mock-data/mock-data';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-articles',
    templateUrl: 'articles.component.html'
})

export class ArticlesComponent implements OnInit{

    constructor(
        private router:Router, 
    ){}

    articles:any = articles;

    ngOnInit(): void {
    }

    onClickArticleCard(articleId) {
        this.router.navigate(['/article-detail/'+ articleId])
    }
    
}
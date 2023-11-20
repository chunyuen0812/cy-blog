import { Component } from '@angular/core';
import { articles } from 'app/shared/mock-data/mock-data';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';


@Component({
    selector: 'app-article-detail',
    templateUrl: 'article-detail.component.html'
})

export class ArticleDetailComponent implements OnInit{

    selectedArticleId:any;
    selectedArticle:any;

    constructor(
        private route: ActivatedRoute,
    ){}


    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => this.selectedArticleId = params['articleId']);
        this.selectedArticle = articles[this.selectedArticleId];
    }
    
}

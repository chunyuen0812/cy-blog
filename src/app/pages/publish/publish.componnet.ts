import { Component } from '@angular/core';
import { articles, authors } from 'app/shared/mock-data/mock-data';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html'
})

export class PublishComponent implements OnInit{
    submitForm: FormGroup;

    constructor(
        private fb: FormBuilder,
    ){}

    ngOnInit(): void {
        this.submitForm = this.fb.group({
            title: ['',Validators.required],
            content: ['',Validators.required],
        })
    }

    onSubmit(){
        console.log(this.submitForm.value);
        articles.push({id: 0, title: this.submitForm.get('title').value, content: this.submitForm.get('content').value,author:"test3",updateTime:Date()})
    }
    
}

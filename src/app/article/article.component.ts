import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input()
  public article: any = null;

  @Input()
  public couleur: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

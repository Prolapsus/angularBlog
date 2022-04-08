import { getLocaleEraNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  public listeArticle : any = [];

  public admin: boolean = false;

  constructor(private client: HttpClient) { }

  ngOnInit(): void {

    const token = localStorage.getItem('token');

    if (token != null) {
      const utilisateur = JSON.parse(atob(token.split('.')[1]));
      this.admin = utilisateur.admin == 1;
    }
    this.client.get("http://localhost/test_json/liste-article.php")
    .subscribe(listeArticle => this.listeArticle = listeArticle)
  }
}

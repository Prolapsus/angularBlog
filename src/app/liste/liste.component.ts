import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  public listeArticle = [
    {
      titre: "Mon premier article",
      texte: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem quisquam soluta vitae illum, ducimus quasi culpa quas beatae. Alias repellat at quia, consequuntur sed dolore eligendi et fugiat placeat.",
    },
    {
      titre: "Mon second article",
      texte: "Tu vois, ce n'est pas un simple sport car en vérité, la vérité, il n'y a pas de vérité et c'est très, très beau d'avoir son propre moi-même ! Mais ça, c'est uniquement lié au spirit.",
    },
    {
      titre: "Mon troisième article",
      texte: "Каждый человек имеет право свободно участвовать в культурной жизни общества, наслаждаться искусством, участвовать в научном прогрессе и пользоваться его благами.",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

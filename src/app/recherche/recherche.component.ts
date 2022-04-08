import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})

export class RechercheComponent implements OnInit {

  public listeArticle : any = [];

  constructor(
    private formBuilder: FormBuilder, //les constructeurs sont toujours appelés en premier donc on pourrait laisser le constructeur APRES le formulaireArticle
    private client: HttpClient
    ) {   
    }

  public formulaireRecherche = this.formBuilder.group(
    {
      recherche: ['', Validators.required]
    }
  )

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.client.post(
      "http://localhost/test_json/recherche.php",
      this.formulaireRecherche.value
    ).subscribe((resultat: any) => this.listeArticle= resultat);
  }

}

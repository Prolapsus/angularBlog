import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  
  // formulaireArticle = new FormGroup(
  //   {
  //     titre : new FormControl('Hello', [Validators.required, Validators.minLength(5)]),
  //     texte : new FormControl('', [Validators.required])
  //   }
  // );
    //
  // controlTitre = new FormControl('Hello', [Validators.required, Validators.minLength(5)]);
  // // titre = "Hello";
  // controlTexte = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder, //les constructeurs sont toujours appelés en premier donc on pourrait laisser le constructeur APRES le formulaireArticle
    private client: HttpClient
    ) {   
    }

  formulaireArticle = this.formBuilder.group(
    {
      titre: ['Hello', [Validators.required, Validators.minLength(5), Validators.pattern("^[a-zA-Z]+$")]],
      texte : ['World', Validators.required],
      sousTitre : ['', Validators.required]
    }
  )

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.formulaireArticle.valid){

      const optionRequete = {
        headers: new HttpHeaders({
          'Acces-Control-Allow-Origin': '*'
        })
      };

      this.client
      .post('http://localhost/test_json/article.php', this.formulaireArticle.value, optionRequete)
      .subscribe(resultat => console.log(resultat));
      // console.log(this.formulaireArticle.value); // avec ça on recupère les valeurs du formulaire dans un objet au format JSON
    }
  }
}

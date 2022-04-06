import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, //les constructeurs sont toujours appelés en premier donc on pourrait laisser le constructeur APRES le formulaireArticle
    private client: HttpClient
    ) {   
    }

  public formulaireConnexion = this.formBuilder.group(
    {
      pseudo: ['', Validators.required],
      motDePasse : ['', Validators.required]
    }
  )

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    if(this.formulaireConnexion.valid){

      const optionRequete = {
        headers: new HttpHeaders({
          'Acces-Control-Allow-Origin': '*'
        })
      };

      this.client
      .post('http://localhost/test_json/connexion.php', this.formulaireConnexion.value, optionRequete)
      .subscribe(resultat => console.log(resultat));
      // console.log(this.formulaireArticle.value); // avec ça on recupère les valeurs du formulaire dans un objet au format JSON
    }
  }

}

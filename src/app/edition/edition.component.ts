import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  control = new FormControl('');
  titre = "Hello";
  texte = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClickAjouter(): void {
    alert(this.titre);
  }
}

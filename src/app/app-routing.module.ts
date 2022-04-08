import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './edition/edition.component';
import { ListeComponent } from './liste/liste.component';
import { Page404Component } from './page404/page404.component';
import { RechercheComponent } from './recherche/recherche.component';
import { AdminGuard } from './securite/admin.guard';

const routes: Routes = [
  // Si jamais on ne met rien, angular va rediriger vers la page accueil
  {path: '',component: AccueilComponent},
  {path:'recherche',component: RechercheComponent},
  {path:'edition',component: EditionComponent, canActivate: [AdminGuard]},
  {path:'liste',component: ListeComponent},
  {path:'connexion',component: ConnexionComponent},
  // si jamais on entre quoi que ce soit d'autre que liste, connexion ou edition, on arrive sur page404
  {path:'**',component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

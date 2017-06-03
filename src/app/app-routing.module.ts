import { UserPageComponent } from './user-page/user-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { CadastroDentistaComponent } from './cadastro-dentista/cadastro-dentista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'cadastros', component: CadastrosComponent },
  { path: 'usuarios', component: UserPageComponent },
  { path: 'cadastroDentista', component: CadastroDentistaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

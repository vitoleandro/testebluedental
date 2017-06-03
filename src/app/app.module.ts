import { DataService } from './data.service';
import { FirebaseService } from './firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DragulaModule } from 'ng2-dragula';
import {ImageCropperComponent} from 'ng2-img-cropper';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroDentistaComponent } from './cadastro-dentista/cadastro-dentista.component';
import { CadastroMatrizComponent } from './cadastro-matriz/cadastro-matriz.component';
import { CadastroFilialComponent } from './cadastro-filial/cadastro-filial.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroDentistaComponent,
    CadastroMatrizComponent,
    CadastroFilialComponent,
    CadastrosComponent,
    DashboardPageComponent,
    UserPageComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DragulaModule
  ],
  providers: [FirebaseService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

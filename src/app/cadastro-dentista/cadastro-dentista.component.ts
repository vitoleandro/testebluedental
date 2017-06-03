import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-dentista',
  templateUrl: './cadastro-dentista.component.html',
  styleUrls: ['./cadastro-dentista.component.css']
})
export class CadastroDentistaComponent implements OnInit {

  formMatriz: boolean = true;
  formFilial: boolean = false; 
  statusMatriz: string = "active";
  statusFilial: string = "inactive";

  constructor() { }

  ngOnInit() {
  }

  showForm(form) {
    if(form == 'matriz') {
      this.formMatriz = true;
      this.formFilial = false;
      this.statusMatriz = "active";
      this.statusFilial = "inactive";
    } else if (form == 'filial') {
      this.formMatriz = false;
      this.formFilial = true;
      this.statusMatriz = "inactive";
      this.statusFilial = "active";
    }
  }

}

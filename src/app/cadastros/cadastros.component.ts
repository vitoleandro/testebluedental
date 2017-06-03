import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {
  
  medicals: FirebaseListObservable<any>;

  constructor(private db: FirebaseService) { }

  ngOnInit() {
    this.medicals = this.db.getList('medical');
  }

}

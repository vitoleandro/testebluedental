import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastro-matriz',
  templateUrl: './cadastro-matriz.component.html',
  styleUrls: ['./cadastro-matriz.component.css']
})
export class CadastroMatrizComponent implements OnInit {

  constructor(private db: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  schedule: any = ["08hs às 09hs", "09hs às 10hs", "10hs às 11hs", "11hs às 12hs", "12hs às 13hs"];
  scheduleArr: any = [];
  medical: any = {
    name: '',
    clinic: 'Matriz',
    shedule: this.scheduleArr
  }

  onSubmit() {
    this.db.addItem('medical', this.medical);
    this.router.navigate(['cadastros']);
  }

  onChange(val, $event, index) {
    console.log($event.target.checked);
    if($event.target.checked) {
      this.scheduleArr.push(val);
    } else {
      this.scheduleArr.splice(index, 1);
    }
  }
}

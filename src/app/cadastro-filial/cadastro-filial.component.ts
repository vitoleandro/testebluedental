import { Router } from '@angular/router';
import { FirebaseService } from './../firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro-filial',
  templateUrl: './cadastro-filial.component.html',
  styleUrls: ['./cadastro-filial.component.css']
})
export class CadastroFilialComponent implements OnInit {

  schedule: any = ["08hs às 09hs", "09hs às 10hs", "10hs às 11hs", "11hs às 12hs", "14hs às 15hs", "15hs às 16hs", "16hs às 17hs", "17hs às 18hs" ];
  scheduleArr: any = [];
  medical: any = {
    name: '',
    clinic: 'Filial',
    shedule: this.scheduleArr
  }

  constructor(private db: FirebaseService, private router: Router) { }
  
  ngOnInit() {
  }

  onSubmit(form) {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  providerName:string="Samsung";
  providerEmail:string="samsung@gmail.com";
  constructor() { }

  ngOnInit(): void {
  }
  info(){
    alert(this.providerName + " "+ this.providerEmail);
    // Save dans BD
    //...
  }

  submit(myform:any){
   alert(myform.value.nomEtudiant + " "+myform.value.prenomEtudiant);
  }
}

import { Component, OnInit } from '@angular/core';
import {EtudiantService} from '../services/etudiant.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contenu : string[] =["String interpolation :{{}}", "Property Binding : []", "Event Binding : ()","Two Way Data Binding [()]","Directives : *ngFor, *ngIf","Pipes : |"];
  //urlImage : string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  image :string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/1280px-AngularJS_logo.svg.png";

  // injection de dépendences : un objet de type EtudiantService
  constructor(private service : EtudiantService) {
    console.log("Constructeur!");
  }

  etudiants : string[] = [];
  // cette méthode s'exécute directement après le constructeur
  ngOnInit(): void {
    console.log("ngOnInit!");
    //console.log(this.service.listCandidats());
    this.etudiants = this.service.listCandidats();
  }

  info(){
    alert("Bien à Angular");
  }

}

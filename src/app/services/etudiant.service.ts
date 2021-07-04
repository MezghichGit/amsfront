import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor() { }


  names :string[] = ["Amine","Rihab","Wissal","Samah"];

  listCandidats()
  {
    return this.names;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  specs = ["DS","GL","WEB"]
  nom = "harbeouiiiiii"
  etudiants= [
    {
      nom:'Mohamed',
      age: 25,
      spec:"DS",
      sexe:"M"

    },
    {
      nom:'eya',
      age: 23,
      spec:"GL",
      sexe:"F"
    },
    {
      nom:'Syrine',
      age: 24,
      spec:"WEB",
      sexe:"F"

    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

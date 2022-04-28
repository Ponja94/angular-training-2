import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {name: 'Turca', type: 'dog', age: 2},
    {name: 'Tom', type: 'cat', age: 10},
    {name: 'Frida', type: 'dog', age: 3},
    {name: 'bob', type: 'horse', age: 5},
  ]

  animal: Animal = {
    name: 'teste',
    type: 'algo',
    age: 5,
  }

  animalDetails ='';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }


  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals,animal);
  }

}

import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { getAnimal } from '../store/animal.action';
import { ZooState } from '../store/animal.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-zoo',
  imports: [],
  templateUrl: './zoo.component.html',
  styleUrl: './zoo.component.scss'
})
export class ZooComponent implements OnInit {
  @Select(ZooState.getAnimal) getAnimalOb$!: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal() {
    this.store.dispatch(new getAnimal()); 
  }
}

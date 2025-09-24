import {  Action, Selector, State, StateContext } from "@ngxs/store";
import { AnimalGet } from "../model/Animal.get.model";
import { Injectable } from "@angular/core";
import {  getAnimal } from "./animal.action";
import { ApiService } from "../services/api.service";

export interface ZooStateModel {   
    GetAnimal: AnimalGet[];
}
@State({
    name: 'zoo',defaults: {
        GetAnimal: []
    }
    
})

@Injectable()
export class ZooState{
    constructor(private apiService: ApiService) {}
    @Selector()
    static getAnimal(state: ZooStateModel) {
        return state.GetAnimal;
    }

    @Action(getAnimal) 
    getAnimal(ctx: StateContext<ZooStateModel>, action: getAnimal) {  
       this.apiService.getAnimalService().subscribe((result) => {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            GetAnimal: result
        });
    });
    }   
}

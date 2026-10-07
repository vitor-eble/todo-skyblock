import { HttpClient } from '@angular/common/http';
import { Service, Injectable } from '@angular/core';
import { TypeIcon } from '../models/typeIconModel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class TypesObjectives {

    typesObjectives = 'assets/dados/typesObjectives.json'

    constructor(
       private http: HttpClient
    ) { }

    getTypesObjectives(): Observable<TypeIcon[]> {
      return this.http.get<any>(this.typesObjectives)
    }
}

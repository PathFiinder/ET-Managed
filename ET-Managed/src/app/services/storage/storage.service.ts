import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    constructor(private http: HttpClient) {}
    
    getSystemDataJSON(){
        return this.http.get('../../../assets/systemData.json')
    }
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    constructor(private http: HttpClient) {}

    getNavigationDataJSON(){
        return this.http.get('../../../assets/navigationData.json')
    }

    getotificationDataJSON(){
        return this.http.get('../../../assets/notificationData.json')
    }
}
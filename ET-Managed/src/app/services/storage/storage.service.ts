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

    getNotificationDataJSON(){
        return this.http.get('../../../assets/notificationData.json')
    }

    getUserInfoDataJSON(){
        return this.http.get('../../../assets/userInfoData.json')
    }
}
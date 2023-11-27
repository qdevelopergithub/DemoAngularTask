import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyService {
  userName!: string
  private isAuthenticated = false;
  url: string = "https://catfact.ninja/fact?"
  private apiUrl = 'https://api.sunrise-sunset.org/json';

  constructor(private http: HttpClient) { }
  getReandomFacts(length: number) {
    const params = { max_length: length };
    return this.http.get(this.url, { params })
  }
  getSunriseInfo(lat: number, lng: number, date: Date) {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lng', lng.toString())
      .set('date', date.toString());
    return this.http.get(this.apiUrl, { params })
  }
  getUserName(data: string) {
    this.userName = data;
  }
  setUserName() {
    return this.userName;
  }

  currentFormData = new BehaviorSubject<Form | null>(null)

  setCurrentData(data: Form) {
    this.currentFormData.next(data)
  }

  login(username: string, password: string): boolean {
   
    if (username === 'user' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
  curretRes = new BehaviorSubject<any | null>(null)
  setRes(data: any) {
  
    this.curretRes.next(data)
  }
  Authenticated(): boolean {
    if (localStorage.getItem("name") !== null) {
      return true;
    } else {
      return false
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }


}
export interface Form {
  Latitude: string;
  Longitude: string;
  Date: Date
}

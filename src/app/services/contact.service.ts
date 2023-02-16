import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl: string = 'http://localhost:3000/users/'

  constructor(
    private httpClient: HttpClient
  ) { }

  sendEmail(pForm: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return lastValueFrom(this.httpClient.post<any>(`${this.baseUrl}send`, pForm, httpOptions))

  }
}


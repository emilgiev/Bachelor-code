import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceFlowService {
  
  public API_URL: string = environment.invoiceFlowApiUrl;

  constructor(
    private http: HttpClient) {
  }

  getVoucherList(API_URL_LIST) {
    return this.http.get(API_URL_LIST);
  }

  getVoucherOverview(API_URL_GRAPH): Observable<any[]> {
    return this.http.get<any[]>(API_URL_GRAPH);
  }

  login(username: string, password: string) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    return this.http.post<any>(this.API_URL + 'Token', "grant_type=password&username=" + username + "&password=" + password, httpOptions);
  }
}

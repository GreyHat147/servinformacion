import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(): any {
    return this.http.get('https://httpbin.org/get');
  }

  public post(data): any {
    return this.http.post('https://httpbin.org/post', {data});
  }

  public update(data): any {
    return this.http.put('https://httpbin.org/put', {data});
  }

  public delete(data): any {
    return this.http.delete('https://httpbin.org/delete');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../../model/application';

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  private basUrl = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {
  }

  //GET all applications
  getAppList(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(`${this.basUrl}/findAllApplications`);
  }

  //GET Application by Id
  getAppById(id: number): Observable<Application>{
    return this.httpClient.get<Application>(`${this.basUrl}/findAppById?id=${id}`);
  }

  //GET Application by Id
  getAppByManagerId(id: number): Observable<Application[]>{
    return this.httpClient.get<Application[]>(`${this.basUrl}/findAppByManagerId?id=${id}`);
  }

  //POST new application
  createApp(application: Application): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/saveApp`, application);
  }
  //UPDATE application
  updateapplication(id:number, application: Application): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/updateApplication/1?id=${id}`, application);
  }

  //DELETE application
  deleteapplication(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/deleteApplication?id=${id}`);
  }

}

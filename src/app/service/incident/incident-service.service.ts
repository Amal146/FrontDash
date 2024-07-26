import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Incident } from '../../model/incident';

@Injectable({
  providedIn: 'root'
})

export class IncidentService {

  private basUrl = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {
  }

   //GET all incidents
  getIncidentList(): Observable<Incident[]> {
    return this.httpClient.get<Incident[]>(`${this.basUrl}/findAllIncidents`);
  }

   //POST new incident
  createIncident(incident: Incident): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/saveIncident`, incident);
  }

   //GET incident by Id
  getIncidentById(id: number): Observable<Incident>{
    return this.httpClient.get<Incident>(`${this.basUrl}/findIcidentById?id=${id}`);
  }

   //GET incident by title
  getIncidentByTitle(title: string): Observable<Incident>{
    return this.httpClient.get<Incident>(`${this.basUrl}/findIncidentByTitle?title=${title}`);
  }

   //GET incident by AppId
   getIncidentsByAppId(application_id: number): Observable<Incident[]>{
    return this.httpClient.get<Incident[]>(`${this.basUrl}/findIncidentByAppId?application_id=${application_id}`);
  }

   //GET Contributors by Incident Id
   getUsersByIncidentId(id: number): Observable<Incident>{
    return this.httpClient.get<Incident>(`${this.basUrl}/findContributorsByIncidentId?id=${id}`);
  }

  //UPDATE incident
  updateIncident(id:number, incident:Incident): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/updateIncident/${id}`, incident);
  }

  //DELETE incident
  deleteIncident(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/deleteIncident?id=${id}`);
  }
}

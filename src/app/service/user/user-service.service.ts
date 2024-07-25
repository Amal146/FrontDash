import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basUrl = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {
  }
//GET all users
  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.basUrl}/findAllUsers`);
  }

//POST new user
  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.basUrl}/saveUser`, user);
  }

//GET user by Id
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.basUrl}/findUserById?id=${id}`);
  }

//GET user by email
  getUserByEmail(email: string): Observable<User>{
    return this.httpClient.get<User>(`${this.basUrl}/findUserByEmail?email=${email}`);
  }

//UPDATE user
  updateUser(id:number, user:User): Observable<Object>{
    return this.httpClient.put(`${this.basUrl}/updateUser/${id}`, user);
  }

//DELETE user
  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.basUrl}/deleteUser?id=${id}`);
  }

  
//Check if user role , by user id and role id 
existsByUserIdAndRoleId(userId: number, roleId: number): Observable<Boolean> {
  return this.httpClient.get<Boolean>(`${this.basUrl}/exists/userRole?userId=${userId}&roleId=${roleId}`);
}

// GET Users by role id 
getUsersByRoleId(roleId: number) : Observable<Object> {
  return this.httpClient.get(`${this.basUrl}/UsersByRoleId?roleId=${roleId}`);
} 


} 


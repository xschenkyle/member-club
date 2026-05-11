import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Injectable({ providedIn: 'root' })
export class MemberService {
  // Ensure this URL matches your Jakarta backend port and context[cite: 3, 5]
  private apiUrl = 'http://localhost:8080/club-api/api/members';
  

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  getMemberById(id: string): Observable<Member> {
    return this.http.get<Member>(`${this.apiUrl}/${id}`);
  }

  updateMember(id: string, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.apiUrl}/${id}`, member);
  }
  
  addMember(member: Member): Observable<Member> {
  return this.http.post<Member>(this.apiUrl, member);
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:8080/club-api/api/members';

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  getMemberById(id: string): Observable<Member> {
    return this.http.get<Member>(`${this.apiUrl}/${id}`);
  }

  // This is the method your component is calling
  saveMember(member: Member): Observable<Member> {
    if (member.id) {
      // UPDATE: If ID exists, use PUT
      return this.http.put<Member>(`${this.apiUrl}/${member.id}`, member);
    } else {
      // CREATE: If ID is missing, use POST
      return this.http.post<Member>(this.apiUrl, member);
    }
  }

  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
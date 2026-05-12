import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  // Class-level property to hold the member data
  members: Member[] = [];

  constructor(
      private memberService: MemberService,
      private cdr: ChangeDetectorRef // Injected to force UI updates
  ) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  /**
   * Fetches the member list from the Jakarta backend.
   * If data is found, it forces a change detection cycle to update the UI.
   */
  loadMembers(): void {
    this.memberService.getMembers().subscribe({
      next: (data: Member[]) => {
        console.log('Backend Response Data:', data);
        console.log('Data length:', data.length);

        // Spread operator ensures a new array reference for Angular's change detection
        this.members = [...data];

        // Manually trigger a UI refresh to ensure the @for loop renders
        this.cdr.detectChanges();

        // Audit check for property naming mismatches (case sensitivity)
        if (data.length > 0) {
          console.log('Available keys in object:', Object.keys(data[0]));
        }
      },
      error: (err) => {
        console.error('Connection failed! Check your backend URL or CORS settings:', err);
      },
      complete: () => {
        console.log('Member fetch request finished.');
      }
    });
  }
}
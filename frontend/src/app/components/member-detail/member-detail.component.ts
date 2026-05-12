import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member | null = null;
  isNew: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private memberService: MemberService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && id !== 'new') {
      this.isNew = false;
      this.loadMember(id);
    } else {
      this.isNew = true;
      this.initializeNewMember();
    }
  }

  private loadMember(id: string): void {
    this.memberService.getMemberById(id).subscribe({
      next: (data) => {
        this.member = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error loading member:', err)
    });
  }

  private initializeNewMember(): void {
    this.member = {
      firstName: '',
      lastName: '',
      age: 0,
      sex: 'Male',
      email: '',
      experienceYears: 0,
      registerDate: new Date().toISOString().split('T')[0], //
      expirationDate: '',
      notes: ''
    } as Member;
    this.cdr.detectChanges();
  }

  saveMember(): void {
    if (this.member) {
      // 1. Create a shallow copy for the payload
      const payload = { ...this.member };

      // 2. Defensive check: Convert empty strings to null for Java LocalDate compatibility
      if (payload.expirationDate === '') payload.expirationDate = null as any;
      if (payload.registerDate === '') payload.registerDate = null as any;

      this.memberService.saveMember(payload).subscribe({
        next: (response) => {
          console.log('Member saved:', response);
          this.router.navigate(['/members']);
        },
        error: (err) => {
          console.error('Save failed:', err);
          alert('Backend Error: Check if the date format is correct.');
        }
      });
    }
  }
}
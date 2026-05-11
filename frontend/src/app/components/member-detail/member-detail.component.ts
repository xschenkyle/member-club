import { Component, OnInit } from '@angular/core';
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
  member!: Member;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id === 'new') {
      this.isEditing = true;
      this.member = {
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
        sex: '',
        experienceYears: 0,
        registerDate: new Date().toISOString().split('T')[0],
        expirationDate: '',
        notes: ''
      };
    } else if (id) {
      this.memberService.getMemberById(id).subscribe({
        next: (data) => this.member = data,
        error: (err) => console.error('Could not fetch member', err)
      });
    }
  }

  saveChanges(): void {
    if (this.member.id) {
      // Update existing
      this.memberService.updateMember(this.member.id, this.member).subscribe(() => {
        alert('Updated successfully!');
        this.router.navigate(['/members']);
      });
    } else {
      // Create new
      this.memberService.addMember(this.member).subscribe(() => {
        alert('Created successfully!');
        this.router.navigate(['/members']);
      });
    }
  }
}
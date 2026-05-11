import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.memberService.getMemberById(id).subscribe(data => {
        this.member = data; // Single member from Jakarta backend[cite: 5]
      });
    }
  }

  saveChanges(): void {
    if (this.member.id) {
      this.memberService.updateMember(this.member.id, this.member).subscribe(() => {
        this.isEditing = false;
        alert('Details updated successfully!');
      });
    }
  }
}
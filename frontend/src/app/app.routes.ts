import { Routes } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';

export const routes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'member-detail/:id', component: MemberDetailComponent },
  { path: '', redirectTo: '/members', pathMatch: 'full' }
];
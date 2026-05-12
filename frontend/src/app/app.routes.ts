import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'members',
    component: MemberListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'member-detail/:id',
    component: MemberDetailComponent,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { path: '**', redirectTo: 'members' }
];
import {  Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SingleUserComponent } from './single-user/single-user.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'update', component: UpdateUserComponent },
  { path: 'user/:id', component: SingleUserComponent },
  { path: '**', redirectTo: '' }
];

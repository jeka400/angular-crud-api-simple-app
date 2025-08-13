import { Component, OnInit } from '@angular/core';
import { UserServiceComponent } from '../user-service/user-service.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent implements OnInit {
  users: User[] = [];
  paginatedUsers: User[] = [];
  loading = false;

  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  constructor(private userService: UserServiceComponent, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    
    this.userService.getUsers().subscribe({
      next: data => { 
        this.users = data; 
        this.totalPages = Math.ceil(this.users.length / this.pageSize);
        this.updatePaginatedUsers();
        this.loading = false; },
      error: err => { console.error(err); this.loading = false; }
    });
  }

  updatePaginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedUsers = this.users.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedUsers();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedUsers();
    }
  }

  goToUser(id: number) {
    this.router.navigate(['/user', id]);
  }

  editUser(id: number) {
    this.router.navigate(['/update'], { queryParams: { id } });
  }

  deleteUser(id: number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(u => u.id !== id);
        this.updatePaginatedUsers();
      });
    }
  }


}



import { Component } from '@angular/core';
import { UserServiceComponent } from '../user-service/user-service.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})

export class DeleteUserComponent {
  id!: number;

  constructor(private userService: UserServiceComponent) {}

  onDelete(): void {
    if (!confirm('Are you sure you want to delete this user?')) return;

    this.userService.deleteUser(this.id).subscribe({
      next: () => {
        this.id = 0;
        console.log('User Deleted');
      },
      error: err => console.error('Delete error', err)
    });
  }
}

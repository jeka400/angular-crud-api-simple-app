import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserServiceComponent } from '../user-service/user-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})

export class CreateUserComponent {
  name: string = '';
  email: string = '';

  constructor(private userService: UserServiceComponent, private router: Router) {}

  onSubmit(): void {
    const user = {
      id: this.name,
      name: this.name,
      email: this.email
    };

    this.userService.createUser(user).subscribe({
      next: () => {
        this.name = '';
        this.email = '';
      },
      error: err => console.error('Create error', err)
    });

    this.router.navigate(['/']);
  }
}

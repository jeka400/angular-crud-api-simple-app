import { Component } from '@angular/core';
import { UserServiceComponent } from '../user-service/user-service.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
  standalone: true
})

export class UpdateUserComponent {
  id!: number;
  name = '';
  email = '';

  constructor(private userService: UserServiceComponent, private router: Router) {}

  onSubmit() {
    const user = { 
      name: this.name,
      email: this.email
    };

    this.userService.updateUser(this.id, user).subscribe({
      next: res => console.log('Updated', res),
      error: err => console.error(err)
    })

    this.router.navigate(['/']);

  }

}

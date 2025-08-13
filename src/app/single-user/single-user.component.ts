import { Component, OnInit } from '@angular/core';
import { UserServiceComponent } from '../user-service/user-service.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-user',
  imports: [CommonModule],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.scss'
})

export class SingleUserComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserServiceComponent, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(u => this.user = u);
  }
}

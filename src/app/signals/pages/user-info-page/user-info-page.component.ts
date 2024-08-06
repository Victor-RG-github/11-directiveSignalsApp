import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../interface/user.interface';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'signals-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UserService);
  userId = signal(1);
  user = signal<User | undefined>(undefined);
  userWasFound = signal(true);
  userName = computed<string>(() => {
    if (!this.user) return '';
    return `${this.user()?.data.first_name} ${this.user()?.data.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    console.log(id);
    if (id < 1) return;
    this.userId.set(id);
    /*     this.userService
      .getUserById(id)
      .pipe(
        catchError((err) => {
          this.userWasFound.set(false);
          return of(undefined);
        })
      )
      .subscribe((user) => {
        if (!user) return;
        this.userWasFound.set(true);
        this.user.set(user);
      }); */
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.userWasFound.set(true);
        this.user.set(user);
      },
      error: () => {
        this.userWasFound.set(false);
        this.user.set(undefined);
      },
    });
  }
}

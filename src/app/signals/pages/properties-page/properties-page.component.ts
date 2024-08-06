import { Component, computed, effect, signal } from '@angular/core';
import { Data, User } from '../../interface/user.interface';

@Component({
  selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  user = signal<User>({
    data: {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    support: {
      url: 'https://reqres.in/#support-heading',
      text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
    },
  });

  counter = signal<number>(10);

  userName = computed<string>(() => {
    return `${this.user()?.data.first_name} ${this.user()?.data.last_name}`;
  });

  userChangeEfect = effect(() => {
    console.log(`${this.user().data.first_name} - ${this.counter()}`);
  });

  updateField(field: keyof Data, value: string): void {
    /*     this.user.update((current) => ({
      ...current,
      [field]: value,
    })); */

    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.data.email = value;
          break;
        case 'first_name':
          current.data.first_name = value;
          break;
        case 'last_name':
          current.data.last_name = value;
          break;
        case 'avatar':
          current.data.avatar = value;
          break;
        case 'id':
          current.data.id = Number(value);
          break;
        default:
      }

      return current;
    });
  }

  increaseBy(value: number) {
    this.counter.set(this.counter() + value);
  }
}

import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  path: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  /*   menuItems: MenuItem[] = [
    { title: 'Counter', path: 'counter' },
    { title: 'User Info', path: 'user-info' },
    { title: 'Properties', path: 'properties' },
  ]; */

  menuItems = signal<MenuItem[]>([
    { title: 'Counter', path: 'counter' },
    { title: 'User Info', path: 'user-info' },
    { title: 'Mutables', path: 'properties' },
  ]);
}

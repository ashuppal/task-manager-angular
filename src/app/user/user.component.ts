import { Component, signal, computed } from '@angular/core';
import { TEST_USERS } from '../test-users';

const randomUser = Math.floor(Math.random() * TEST_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(TEST_USERS[randomUser]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomUser = Math.floor(Math.random() * TEST_USERS.length);
    //set method is used to update the value of signal
    this.selectedUser.set(TEST_USERS[randomUser]);
  }
}

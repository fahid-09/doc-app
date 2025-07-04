import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signup, login } from '../data-types';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss'],
})
export class UserAuthComponent {
  userError: string | undefined;
  showLogin = false;
  uploadImage: any;

  constructor(private userService: UserService) {}

  signupUser(data: signup, form: NgForm) {
    this.userService.userSignup(data);
    console.log('user data is ', data);

    form.reset();
  }
  

  login(data: login) {
    this.userService.userLogIn(data);
    this.userService.isLogginError.subscribe((isError) => {
      if (isError) {
        this.userError = 'email or password is incorrect';
      }
      setTimeout(() => {
        this.userError = undefined;
      }, 3000);
    });
  }
  openLoginSignupForm() {
    this.showLogin = !this.showLogin;
  }

  fileChange(e: any) {
    if (e.target.files[0] != null) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadImage = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0])
    }
  }
}

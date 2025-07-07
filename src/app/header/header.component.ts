import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  
  userImage: string = "";
  logoImage = 'assets/images/logo-BNCDj_dh.svg';
  userName: string = '';
  showDropdown: boolean = false;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  refreshPage(){
      window.location.reload();

  }

  ngOnInit() {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('user')) {
          let userAccount = localStorage.getItem('user');
          let userData = userAccount && JSON.parse(userAccount);
          this.userName = userData.name;
          this.userImage = userData.image;
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.refreshPage();
  }
}

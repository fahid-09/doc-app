import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
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
          // console.log('hello', userAccount);

          let userData = userAccount && JSON.parse(userAccount);
          // console.log('userdata ', userData);

          this.userName = userData.name;
        }
        // console.log('name is', this.userName);
      }
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.refreshPage();
  }
}

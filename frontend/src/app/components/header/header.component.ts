import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/models/user.model';
import { OauthService } from 'src/app/services/oauth/oauth.service';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { RegistrationComponent } from '../registration/registration.component';
import { UserAccountComponent } from '../user-account/user-account.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: Array<{ text: string, path: string }>;
  isLoggedIn = false;
  protected user: User;

  constructor(private router: Router, private navbarService: NavbarService, private userService: UserService,private oauthService: OauthService) {
    this.router.config.unshift(
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'myAccount', component: UserAccountComponent }
    );
  }

  ngOnInit() {
    this.links = this.navbarService.getLinks();
    this.navbarService.getLoginStatus().subscribe(status => {
      this.isLoggedIn = status;
    });
    this.userService.getLogedUser().subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }

  logout() {
    this.oauthService.clearToken();
    this.navbarService.updateLoginStatus(false);
    this.router.navigate(['login']);
  }

}

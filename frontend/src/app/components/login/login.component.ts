import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { UserService } from 'src/app/services/user/user.service';
import { OauthService } from 'src/app/services/oauth/oauth.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected validateForm: FormGroup;
  protected resetPassword: FormGroup;
  protected invalidLogin = false;
  protected submitted = false;
  protected submittedReset = false;
  protected oauthError: string;
  protected emailToReset: string;
  protected visibleResetPanel = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService,
              private navbarService: NavbarService,
              private http: UserService, private oauthService: OauthService) {

  }

  ngOnInit() {
    window.sessionStorage.removeItem('token');
    this.validateForm = this.formBuilder.group({
      pesel: ['', [Validators.required, Validators.minLength(11)]],
      password: ['', Validators.required]
    });
    this.resetPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.validateForm.invalid) {
      return;
    }
    const body = new HttpParams()
      .set('username', this.fields.pesel.value)
      .set('password', this.fields.password.value)
      .set('grant_type', 'password');

    this.userService.login(body.toString()).subscribe(data => {
      this.oauthService.setToken(data);
      this.http.getByPesel(this.fields.pesel.value).subscribe(res => {
        this.userService.addUser(res);
        this.loginUser();
        this.router.navigate(['home']);
      });

    }, err => {
      if (err.error.error_description === 'Bad credentials') {
        this.oauthError = 'Invalid login or password';
      }
      console.log(err.error);
    });
  }
  // convenience getter for easy access to form fields
  get fields() { return this.validateForm.controls; }
  get resetFields() {return this.resetPassword.controls; }

  resetPasswordBtn() {
    this.submittedReset = true;
    if (this.resetPassword.invalid) {
      return;
    }
    console.log('test przycisku');
  }
  forgotPassBtn() {
    this.visibleResetPanel = !this.visibleResetPanel;
  }
  getClass(errorState: boolean, controlName: AbstractControl) {
    let className = '';
    if (controlName.value != null && !errorState && controlName.value.length > 0) {
      className = 'form-control is-valid';
    } else if (errorState) {
      className = 'is-invalid';
    } else {
      className = 'form-control';
    }
    return className;
  }

  loginUser() {
    this.navbarService.updateNavAfterAuth('user');
    this.navbarService.updateLoginStatus(true);
  }

}

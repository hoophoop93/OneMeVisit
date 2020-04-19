import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MyNotifierService } from 'src/app/services/notifier/my-notifier.service';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { MustMatch } from 'src/app/shared/utils/passwordMatcher';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  readonly notifier: MyNotifierService;
  protected user = new User();
  protected confirmPass: string;
  protected validateForm: FormGroup;
  protected submitted = false;
  protected error: string;
  protected peselPattern ='\\d+'

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private notiferService: MyNotifierService) {
    this.notifier = notiferService;
  }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      pesel: ['', [Validators.required, Validators.minLength(11)]],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  // convenience getter for easy access to form fields
  get fields() { return this.validateForm.controls; }

  onSubmit() {
    this.submitted = true;

    //stop here if form is invalid
    if (this.validateForm.invalid) {
      return;
    }
    this.userService.register(this.user).subscribe(res => {
      console.log(res.body);
      this.router.navigate(['/login']).then(() => {
        this.notifier.showNotifer("success", res.body);
      });

    },
      (err: HttpErrorResponse) => {
        if (err.status === 400) {
          this.error = err.error;
          this.notifier.showNotifer("error", this.error);

          // activate the error message
          this.fields.pesel.setErrors({
            serverError: this.error
          });

        }
      });
  }

  getClass(errorState: boolean, controlName: AbstractControl) {
    var className = '';
    if (controlName.value != null && !errorState && controlName.value.length > 0) {
      className = 'form-control is-valid';
    } else if (errorState) {
      className = 'is-invalid';
    } else {
      className = 'form-control';
    }
    return className;
  }

}

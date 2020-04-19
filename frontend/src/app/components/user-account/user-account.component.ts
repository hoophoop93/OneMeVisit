import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/models/user.model';
import { Address } from 'src/app/shared/models/address.model';
import { AddressService } from 'src/app/services/address/address.service';
import { MyNotifierService } from 'src/app/services/notifier/my-notifier.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  protected validateForm: FormGroup;
  readonly notifier: MyNotifierService;
  protected user = new User();
  protected address = new Address();
  protected addressCopied: Address;
  protected usserCoppied: User;
  protected submitted = false;
  protected isDisabled = true;
  protected updateAddress = false;
  protected updateUser = false;
  protected validAddressFields = [
    { checked: true },
    { checked: true },
    { checked: true },
  ]
  protected validUserFields = [
    { checked: true },
    { checked: true },
    { checked: true },
    { checked: true },
    { checked: true },
    { checked: true },
  ]
  protected nameHidden;
  protected streetCounter = 0;
  protected districtCounter = 0;
  protected postalCodeCounter = 0;

  protected nameCounter = 0;
  protected surnameCounter = 0;
  protected peselCounter = 0;
  protected phoneCounter = 0;
  protected emailConuter = 0;
  protected passwordCounter = 0;

  constructor(private formBuilder: FormBuilder, private addressService: AddressService, private userService: UserService, private notiferService: MyNotifierService) {
    this.notifier = notiferService;
  }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      nameInfo: ['', Validators.required],
      surnameInfo: ['', Validators.required],
      peselInfo: ['', [Validators.required, Validators.minLength(11)]],
      phoneInfo: ['', Validators.required],
      emailInfo: ['', [Validators.required, Validators.email]],
      passwordInfo: ['', [Validators.required, Validators.minLength(6)]],
      cityInfo: ['', Validators.required],
      streetInfo: ['', Validators.required],
      postalCodeInfo: ['', Validators.required],
    });

    this.userService.getLogedUser().subscribe(res => {
      console.log(res);
      this.user = res;
      this.usserCoppied = Object.assign({}, res);
    });

    this.addressService.getAddressByUserId(this.user.id).subscribe(res => {
      if (res != null) {
        this.address = res;
        this.addressCopied = Object.assign({}, res);
      }
    })
  }

  // convenience getter for easy access to form fields
  get fields() { return this.validateForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.validateForm.invalid) {
      return;
    }

    if (this.updateUser) {
      this.userService.updateUser(this.user).subscribe(res => {
        this.notiferService.showNotifer("success", res.body)
      })
    }

    if (this.updateAddress) {
      this.address.userDTO = this.user;
      this.addressService.updateUserAddress(this.address).subscribe(res => {
        this.addressCopied = Object.assign({}, this.address);
        this.notiferService.showNotifer("success", res.body)
      })
    }

    this.validUserFields.forEach(item => {
      item.checked = true;
    })
    this.isDisabled = true;

    this.validAddressFields.forEach(item => {
      item.checked = true;
    })
    this.isDisabled = true;
  }

  onSearchChange(searchValue): void {
    if (searchValue.attributes.formControlName.nodeValue === 'streetInfo') {
      this.streetCounter = this.compareValues(this.addressCopied.street, searchValue.value, this.streetCounter);
      if (this.streetCounter > 0) {
        this.validAddressFields[0] = { checked: false };
      } else {
        this.validAddressFields[0] = { checked: true };
      }
    } else if (searchValue.attributes.formControlName.nodeValue === 'cityInfo') {
      this.districtCounter = this.compareValues(this.addressCopied.city, searchValue.value, this.districtCounter);
      if (this.districtCounter > 0) {
        this.validAddressFields[1] = { checked: false };
      } else {
        this.validAddressFields[1] = { checked: true };
      }
    } else if (searchValue.attributes.formControlName.nodeValue === 'postalCodeInfo') {
      this.postalCodeCounter = this.compareValues(this.addressCopied.postalCode, searchValue.value, this.postalCodeCounter);
      if (this.postalCodeCounter > 0) {
        this.validAddressFields[2] = { checked: false };
      } else {
        this.validAddressFields[2] = { checked: true };
      }
    }
    else if (searchValue.attributes.formControlName.nodeValue === 'nameInfo') {
      this.nameCounter = this.compareValues(this.usserCoppied.name, searchValue.value, this.nameCounter);
      if (this.nameCounter > 0) {
        this.validUserFields[0] = { checked: false };
      } else {
        this.validUserFields[0] = { checked: true };
      }
    } else if (searchValue.attributes.formControlName.nodeValue === 'surnameInfo') {
      this.surnameCounter = this.compareValues(this.usserCoppied.surname, searchValue.value, this.surnameCounter);
      if (this.surnameCounter > 0) {
        this.validUserFields[1] = { checked: false };
      } else {
        this.validUserFields[1] = { checked: true };
      }
    }
    else if (searchValue.attributes.formControlName.nodeValue === 'peselInfo') {
      this.peselCounter = this.compareValues(this.usserCoppied.pesel, searchValue.value, this.peselCounter);
      if (this.peselCounter > 0) {
        this.validUserFields[2] = { checked: false };
      } else {
        this.validUserFields[2] = { checked: true };
      }
    } else if (searchValue.attributes.formControlName.nodeValue === 'phoneInfo') {
      this.phoneCounter = this.compareValues(this.usserCoppied.phoneNumber, searchValue.value, this.phoneCounter);
      if (this.phoneCounter > 0) {
        this.validUserFields[3] = { checked: false };
      } else {
        this.validUserFields[3] = { checked: true };
      }
    }
    else if (searchValue.attributes.formControlName.nodeValue === 'emailInfo') {
      this.emailConuter = this.compareValues(this.usserCoppied.email, searchValue.value, this.emailConuter);
      if (this.emailConuter > 0) {
        this.validUserFields[4] = { checked: false };
      } else {
        this.validUserFields[4] = { checked: true };
      }
    } else if (searchValue.attributes.formControlName.nodeValue === 'passwordInfo') {
      this.passwordCounter = this.compareValues(this.usserCoppied.password, searchValue.value, this.passwordCounter);
      if (this.passwordCounter > 0) {
        this.validUserFields[5] = { checked: false };
      } else {
        this.validUserFields[5] = { checked: true };
      }
    }
    let statusButton = true;
    for (var i = 0; i < this.validUserFields.length; i++) {
      if (this.validUserFields[i].checked === false) {
        statusButton = this.isDisabled = false;
        this.updateUser = true;
        break;
      } else {
        this.isDisabled = true;
      }
    }
    for (var i = 0; i < this.validAddressFields.length; i++) {
      if (this.validAddressFields[i].checked === false) {
        this.isDisabled = false;
        this.updateAddress = true;
        break;
      } else {
        this.isDisabled = statusButton;
      }
    }
  }

  compareValues(oryginalValue: string, newValue: string, counterForControl: number): number {
    if (oryginalValue !== newValue) {
      if (counterForControl === 0 || counterForControl > 0) {
        return 1;
      }
    } else {
      if (counterForControl === 1 || counterForControl < 1) {
        return 0;
      }
    }
  }

}

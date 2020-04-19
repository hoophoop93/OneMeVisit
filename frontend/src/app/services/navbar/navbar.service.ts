import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private links = new Array<{ text: string, path: string }>();
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    this.addItem({ text: 'Sign in', path: 'login' });
    this.addItem({ text: 'Create an Account', path: 'registration' });
    //this.isLoggedIn.next(false);
  }
  getLinks() {
    return this.links;
  }

  getLoginStatus(): Observable<boolean> {
    return this.isLoggedIn;
  }
  addItem({ text, path }) {
    this.links.push({ text: text, path: path });
  }
  updateLoginStatus(status: boolean) {
    this.isLoggedIn.next(status);

    if (!status) {
      this.clearAllItems();
      this.addItem({ text: 'Sign in', path: 'login' });
      this.addItem({ text: 'Create an Account', path: 'registration' });
    }
  }
  updateNavAfterAuth(role: string): void {
    this.removeItem({ text: 'Sign in' });
    this.removeItem({ text: 'Create an Account' });

    if (role === 'user') {
      this.addItem({ text: 'Add Appointment', path: 'addVisit' });
      this.addItem({ text: 'Visits', path: 'home' });
    }
  }
  removeItem({ text }) {
    this.links.forEach((link, index) => {
      if (link.text === text) {
        this.links.splice(index, 1);
      }
    });
  }

  clearAllItems() {
    this.links.length = 0;
  }
}

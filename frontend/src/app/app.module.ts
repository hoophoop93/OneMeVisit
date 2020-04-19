import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpErrorInterceptor } from './services/error-interceptor/http-error.interceptor';
import { NotifierModule } from "angular-notifier";
import { TokenInterceptor } from './services/token-interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule, MatDatepickerModule, MatNativeDateModule,MatInputModule,MatFormFieldModule  } from '@angular/material';
import { DatePipe } from '@angular/common';
import { CheckedDirective } from './shared/directives/checked.directive';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModalComponent } from './shared/modal/common-modal/common-modal.component';
import { VisitDetailsModalComponent } from './components/visit-details/visit-details.component';
import { AddVisitComponent } from './components/add-visit/add-visit.component';
import { MyNotifierService } from './services/notifier/my-notifier.service';
import { UpdateVisitComponent } from './components/update-visit/update-visit.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

const MaterialImport =[
  MatDatepickerModule,
  MatRippleModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    HeaderComponent,
    CommonModalComponent,
    CommonModalComponent,
    VisitDetailsModalComponent,
    AddVisitComponent,
    UpdateVisitComponent,
    UserAccountComponent,
    CheckedDirective
  ],
  imports: [
    MaterialImport,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NotifierModule.withConfig({
      position: {
        vertical: {
          /**
           * Defines the horizontal position on the screen
           * @type {'left' | 'middle' | 'right'}
           */
          position: 'top',
          distance: 60
        }
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, 
      useClass: HttpErrorInterceptor, 
      multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    MyNotifierService,
    DatePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { UserAccountComponent } from './components/user-account/user-account.component';


const routes: Routes=[
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'addVisit', component: HomeComponent},
    {path: 'myAccount', component: UserAccountComponent},
    {path: '', redirectTo :'login',pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [RegistrationComponent,LoginComponent, HomeComponent] 
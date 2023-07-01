import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { RootComponent } from './root/root.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ToastComponent } from './alerts/toast/toast.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './dashboard/user-details/user-details.component';
import { QuizzesDetailsComponent } from './dashboard/quizzes-details/quizzes-details.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RootComponent,
    SignupComponent,
    SigninComponent,
    PagenotfoundComponent,
    ToastComponent,
    DashboardComponent,
    UserDetailsComponent,
    QuizzesDetailsComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: RootComponent, title: 'root' },
  {
    path: 'auth', children: [
      { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent, title: 'signin' },
      { path: 'signup', component: SignupComponent, title: 'signup' },
    ]
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard], title: 'Quizzify | dashboard' },
  { path: 'quizzes', component: QuizzesComponent, canActivate: [authGuard], title: 'Quizzify | quizzes' },
  { path: '**', component: PagenotfoundComponent, title: 'Page not found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

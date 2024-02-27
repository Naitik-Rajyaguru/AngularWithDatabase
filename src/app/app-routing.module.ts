import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { WalkinListingComponent } from './walkin-listing/walkin-listing.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { HallticketComponent } from './hallticket/hallticket.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'step1', component: Step1Component},
  {path:'step2', component: Step2Component},
  {path:'step3', component: Step3Component},
  {path:'jobcards', component: WalkinListingComponent},
  {path:'role', component: ApplyNowComponent},
  {path:'role/:ID', component: ApplyNowComponent},
  {path:'hallticket', component: HallticketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

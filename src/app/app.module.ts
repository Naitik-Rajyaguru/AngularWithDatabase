import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoHeaderComponent } from './login/logo-header/logo-header.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { CreateCancleComponent } from './create-cancle/create-cancle.component';
import { FormTrackComponent } from './form-track/form-track.component';
import { PersonalInfoComponent } from './step1/personal-info/personal-info.component';
import { Step1Component } from './step1/step1.component';
import { FooterButtonComponent } from './footer-button/footer-button.component';
import { QualificationTitleComponent } from './step2/qualification-title/qualification-title.component';
import { EducationalQualificationComponent } from './step2/educational-qualification/educational-qualification.component';
import { ApplicantTypeComponent } from './step2/applicant-type/applicant-type.component';
import { ProfessionalQualificationComponent } from './step2/professional-qualification/professional-qualification.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { ReviewComponent } from './step3/review/review.component';
import { WalkinListingComponent } from './walkin-listing/walkin-listing.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';
import { HallticketComponent } from './hallticket/hallticket.component';
import { RolediscriptionComponent } from './apply-now/rolediscription/rolediscription.component';
import { SlotComponent } from './apply-now/slot/slot.component';
import { JobcardComponent } from './walkin-listing/jobcard/jobcard.component';
import { QualificationsComponent } from './step2/qualifications/qualifications.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoHeaderComponent,
    LoginFormComponent,
    CreateCancleComponent,
    FormTrackComponent,
    PersonalInfoComponent,
    Step1Component,
    FooterButtonComponent,
    QualificationTitleComponent,
    EducationalQualificationComponent,
    ApplicantTypeComponent,
    ProfessionalQualificationComponent,
    Step2Component,
    Step3Component,
    ReviewComponent,
    WalkinListingComponent,
    ApplyNowComponent,
    HallticketComponent,
    RolediscriptionComponent,
    SlotComponent,
    JobcardComponent,
    QualificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

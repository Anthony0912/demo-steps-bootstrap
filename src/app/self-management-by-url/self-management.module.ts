import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelfManagementRoutingModule } from './self-management-routing.module';
import { StepComponent } from './components/step/step.component';
import { SelfManagementComponent } from './self-management.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { IdentificationComponent } from './pages/identification/identification.component';
import { RevenuesComponent } from './pages/revenues/revenues.component';
import { SignaturesComponent } from './pages/signatures/signatures.component';


@NgModule({
  declarations: [
    StepComponent,
    SelfManagementComponent,
    PersonalInformationComponent,
    DocumentsComponent,
    IdentificationComponent,
    RevenuesComponent,
    SignaturesComponent
  ],
  imports: [
    CommonModule,
    SelfManagementRoutingModule,
    ReactiveFormsModule
  ]
})
export class SelfManagementModule { }

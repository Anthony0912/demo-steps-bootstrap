import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfManagementComponent } from 'src/app/self-management-by-url/self-management.component';

const routes: Routes = [
  {
    path: '',
    component: SelfManagementComponent
  },
  {
    path: '**',
    redirectTo: 'autogestion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfManagementRoutingModule { }

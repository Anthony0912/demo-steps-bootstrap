import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'autogestion', loadChildren: () => import('src/app/self-management/self-management.module').then(m => m.SelfManagementModule) },
  { path: 'autogestion-url/:step', loadChildren: () => import('src/app/self-management-by-url/self-management.module').then(m => m.SelfManagementModule) },
  {
     path: '**', 
    redirectTo: 'autogestion' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

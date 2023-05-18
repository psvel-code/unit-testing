import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './core/user-registration/user-registration.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { TableComponent } from './core/table/table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav/form',
    pathMatch: 'full',
  },
  { path: 'form', component: UserRegistrationComponent },
  {
    path: 'nav',
    component: NavbarComponent,
    children: [
      { path: 'form', component: UserRegistrationComponent, title: 'form' },
      { path: 'table', component: TableComponent, title: 'Table' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

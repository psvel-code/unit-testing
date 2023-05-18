import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [DialogComponent, UserRegistrationComponent, TableComponent, NavbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [UserRegistrationComponent, DialogComponent, TableComponent],
})
export class CoreModule {}

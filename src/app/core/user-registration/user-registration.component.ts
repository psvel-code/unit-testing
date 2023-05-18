import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DialogService } from 'src/app/shared/dialog.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  employee_detail!: FormGroup;
  constructor(
    private employee: EmployeeService,
    private dialog: DialogService
  ) {}
  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.employee_detail = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      hobbies: new FormArray([]),
    });
    this.createArray();
  }

  //====================================================submit================================================================
  onSubmit() {
    if (this.employee_detail.valid) {
      const dialogRef = this.dialog.openConfirmationDialog(
        'Do you want to Submit'
      );
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          this.employee
            .createEmployee(this.employee_detail.value)
            .subscribe((res) => {
              console.log('create emp response');
              this.employee_detail.reset();
            });
        }
      });
    }
  }

  gethobbies() {
    return (this.employee_detail.get('hobbies') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('hobbies').controls[i].controls;
  }
  createArray() {
    (this.employee_detail?.get('hobbies') as FormArray).push(
      new FormGroup({
        hobbie: new FormControl(null, [Validators.required]),
      })
    );
  }
  removeArray(i: number) {
    (this.employee_detail.get('hobbies') as FormArray).removeAt(i);
  }
  cancel() {
    const dialogRef = this.dialog.openConfirmationDialog(
      'Do you want to cancel'
    );
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.employee_detail.reset();
      }
    });
  }
}

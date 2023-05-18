import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../core/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openConfirmationDialog(content: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        header: 'Confirmation',
        content: content,
        actiontype: 'Confirmation',
        // name: name,
      },
      width: '400px',
      autoFocus: false,
    });
    return dialogRef;
  }
}

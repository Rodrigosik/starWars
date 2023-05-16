import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { starWarsApiModel } from 'src/app/utils/models';
import { InformationComponent } from './information.component';

@Injectable()
export class InformationService {
  constructor(private readonly dialog: MatDialog) {}

  open(data: starWarsApiModel): MatDialogRef<InformationComponent> {
    return this.dialog.open<InformationComponent>(InformationComponent, {
      disableClose: true,
      data: data,
      width: '400px',
    });
  }
}

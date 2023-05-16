import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { starWarsApiModel } from 'src/app/utils/models';

@Component({
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public readonly data: starWarsApiModel
  ) {
    console.log(this.data);
  }
}

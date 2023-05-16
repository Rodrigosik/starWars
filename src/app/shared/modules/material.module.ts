import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MODULES = [MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule {}

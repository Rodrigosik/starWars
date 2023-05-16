import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from './interceptors/loading/loading.module';
import { StarwarsService } from './services/starwars.service';

const SERVICES = [StarwarsService];
const MODULES = [LoadingModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  providers: [SERVICES],
  exports: [MODULES],
})
export class CoreModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarwarsService } from './services/starwars.service';

const SERVICES = [StarwarsService];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SERVICES],
})
export class CoreModule {}

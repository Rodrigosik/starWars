import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InformationComponent } from './modals/information/information.component';
import { InformationService } from './modals/information/information.service';

const COMPONENTS = [HomeComponent, InformationComponent];
const SERVICES = [InformationService];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [SERVICES],
})
export class HomeModule {}

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from './loading.service';

const COMPONENTS = [LoadingComponent];
const SERVICES = [LoadingService];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
  providers: [
    SERVICES,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class LoadingModule {}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let loadingService: LoadingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [LoadingService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    loadingService = fixture.debugElement.injector.get(LoadingService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creación del componente.', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading$!: Observable<boolean>;
  loading: boolean;

  constructor(private readonly loadingService: LoadingService) {
    this.loading = false;
  }

  ngOnInit() {
    this.loading$ = this.loadingService.getLoading$();
    this.loading$.subscribe((loading) => {
      this.loading = loading;
    });
  }
}

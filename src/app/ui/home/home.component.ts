import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/core/services/starwars.service';
import { starWarsApiModel } from 'src/app/utils/models';
import { InformationService } from './modals/information/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imagesList: starWarsApiModel[] = [];
  search: string = '';

  constructor(
    private readonly starwarsService: StarwarsService,
    private readonly informationService: InformationService
  ) {}

  ngOnInit(): void {
    this.starwarsService.getDataStarWars().subscribe((response) => {
      this.imagesList = response;
      console.log(response);
    });
  }

  openInformation(data: starWarsApiModel): void {
    this.informationService
      .open(data)
      .afterClosed()
      .subscribe(() => {});
  }
}

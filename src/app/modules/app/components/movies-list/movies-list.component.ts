import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public data: any;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getMovies().subscribe(({results} : any) => {
      this.data = results;
    })
  }

}

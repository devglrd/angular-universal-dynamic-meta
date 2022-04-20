import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from "../../services";
import {Meta, Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public data: any;
  public loading = true;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getMovies().subscribe(({results}: any) => {
      this.data = results;
      this.loading = false;
    })
  }

}

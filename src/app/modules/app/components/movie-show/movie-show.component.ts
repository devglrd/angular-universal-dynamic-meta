import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {

  public data: any;
  public loading = true;

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(({params}: any) => {
      if (!!params.id) {
        this.appService.getMovie(params.id).subscribe((data: any) => {
          this.data = data;
          this.loading = false;
        })
      }
    })
  }
}

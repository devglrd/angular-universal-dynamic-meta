import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {

  public data: any;

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(({params}: any) => {
      if (!!params.id) {

        this.appService.getMovie(params.id).subscribe((data: any) => {
          console.log(data);
          this.data = data;
        })
      }
    })

  }

}

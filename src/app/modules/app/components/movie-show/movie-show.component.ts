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

  constructor(@Inject(DOCUMENT) private doc: any, private title: Title, private meta: Meta, private router: Router, private route: ActivatedRoute, private appService: AppService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(({params}: any) => {
      if (!!params.id) {
        this.appService.getMovie(params.id).subscribe((data: any) => {
          this.data = data;
          this.loading = false;
          this.setMeta(data);
        })
      }
    })

  }

  private setMeta(data: any) {
    const file = 'https://image.tmdb.org/t/p/w500/' + data.poster_path;
    this.title.setTitle(data.title);

    this.meta.addTag({name: "title", content: data.title});
    this.meta.addTag({name: "description", content: data.overview.substring(0, 200)});
    this.meta.addTag({name: "image", content: file});
    this.meta.addTag({property: 'og:title', content: data.title});
    this.meta.addTag({property: 'og:image', content: file});
    this.meta.addTag({property: 'og:image:url', content: file});
    this.meta.addTag({property: 'og:description', content: data.overview.substring(0, 200)});
    this.meta.addTag({property: 'og:type', content: 'website'});
    this.meta.addTag({property: 'og:url', content: this.doc.URL.replace('http', 'https')});
    this.meta.addTag({property: 'og:site_name', content: 'Movie Site'});

    this.meta.addTag({name: "twitter:card", content: 'summary_large_image'});
    this.meta.addTag({name: "twitter:site", content: '@devglrd'});
    this.meta.addTag({name: "twitter:creator", content: '@devglrd'});
    this.meta.addTag({name: "twitter:title", content: data.overview.substring(0, 200)});
    this.meta.addTag({name: "twitter:image:url", content: file});

    this.meta.addTag({name: "twitter:image:width", content: '512'});
    this.meta.addTag({name: "twitter:image:height", content: '512'});
    this.meta.addTag({name: "twitter:image:alt", content: data.title});
    this.meta.addTag({name: "twitter:description", content: data.overview.substring(0, 200)});
  }
}

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

  constructor(@Inject(DOCUMENT) private doc: any, private meta: Meta, private title: Title, private appService: AppService) {
  }

  ngOnInit(): void {
    this.setMeta()
    this.appService.getMovies().subscribe(({results}: any) => {
      this.data = results;
      this.loading = false;
    })
  }

  private setMeta() {
    this.title.setTitle('Movie List');

    this.meta.addTag({name: "title", content: 'Movie List'});
    this.meta.addTag({name: "description", content: 'Movie List Text'});
    this.meta.addTag({name: "image", content: ''});
    this.meta.addTag({property: 'og:title', content: 'Movie List'});
    this.meta.addTag({property: 'og:image', content: ""});
    this.meta.addTag({property: 'og:image:url', content: ""});
    this.meta.addTag({property: 'og:description', content: "Movie List Text"});
    this.meta.addTag({property: 'og:type', content: 'website'});
    this.meta.addTag({property: 'og:url', content: this.doc.URL.replace('http', 'https')});
    this.meta.addTag({property: 'og:site_name', content: 'Movie Site'});

    this.meta.addTag({name: "twitter:card", content: 'summary_large_image'});
    this.meta.addTag({name: "twitter:site", content: '@devglrd'});
    this.meta.addTag({name: "twitter:creator", content: '@devglrd'});
    this.meta.addTag({name: "twitter:title", content: "Movie List Text"});
    this.meta.addTag({name: "twitter:image:url", content: ""});

    this.meta.addTag({name: "twitter:image:width", content: '512'});
    this.meta.addTag({name: "twitter:image:height", content: '512'});
    this.meta.addTag({name: "twitter:image:alt", content: 'Movie List'});
    this.meta.addTag({name: "twitter:description", content: "Movie List Text"});
  }
}

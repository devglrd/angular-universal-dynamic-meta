import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ActivatedRoute, ActivationEnd, NavigationEnd, Router, RoutesRecognized} from "@angular/router";
import {filter} from 'rxjs';
import {AppService} from "../../modules/app/services";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private apiKey = "2ad4dcfaf3dee66b78fbf265c9c6af9f";
  public currentUrl: any = '';
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private meta: Meta, private title: Title, @Inject(DOCUMENT) private doc: any,) {
    this.setMetaByRouter()
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe(() => {
        this.setMetaByRouter();
      });
  }

  private setMetaByRouter() {
    const currUrl = this.doc.URL.replace('http://localhost:4200/', '').replace('http://localhost:4000/', '').replace('http://angular-universal-dynamic-meta.vercel.app/', '')
    console.log(currUrl, '--');
    if (currUrl === "movies") {
      this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`).subscribe(({results}: any) => {

        this.title.setTitle('Movie List - (' + results.length + ')');

        this.meta.addTag({name: "title", content: 'Movie List - (' + results.length + ')'});
        this.meta.addTag({name: "description", content: 'Movie List - (' + results.length + ') Text '});
        this.meta.addTag({name: "image", content: ''});
        this.meta.addTag({property: 'og:title', content: 'Movie List - (' + results.length + ') Text '});
        this.meta.addTag({property: 'og:image', content: "https://pbs.twimg.com/profile_images/1191702634769633280/ITQLnaF5_400x400.jpg"});
        this.meta.addTag({property: 'og:image:url', content: "https://pbs.twimg.com/profile_images/1191702634769633280/ITQLnaF5_400x400.jpg"});
        this.meta.addTag({property: 'og:description', content: 'Movie List - (' + results.length + ')'});
        this.meta.addTag({property: 'og:type', content: 'website'});
        this.meta.addTag({property: 'og:url', content: this.doc.URL.replace('http', 'https')});
        this.meta.addTag({property: 'og:site_name', content: 'Movie Site'});

        this.meta.addTag({name: "twitter:card", content: 'summary_large_image'});
        this.meta.addTag({name: "twitter:site", content: '@devglrd'});
        this.meta.addTag({name: "twitter:creator", content: '@devglrd'});
        this.meta.addTag({name: "twitter:title", content: 'Movie List - (' + results.length + ') Text'});
        this.meta.addTag({name: "twitter:image:url", content: "https://pbs.twimg.com/profile_images/1191702634769633280/ITQLnaF5_400x400.jpg"});

        this.meta.addTag({name: "twitter:image:width", content: '512'});
        this.meta.addTag({name: "twitter:image:height", content: '512'});
        this.meta.addTag({name: "twitter:image:alt", content: 'Movie List - (' + results.length + ') Text'});
        this.meta.addTag({name: "twitter:description", content: 'Movie List - (' + results.length + ') Text'});

      });

    } else if (currUrl.includes('movies/')) {
      const id = currUrl.replace('movies/', '')
      this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`).subscribe((data: any) => {
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
      })
    }


  }
}

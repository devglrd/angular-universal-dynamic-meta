import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiKey = "2ad4dcfaf3dee66b78fbf265c9c6af9f";
  private url = environment.baseUrl
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url + `discover/movie?api_key=${this.apiKey}`);
  }

  getMovie(id: any) {
    return this.http.get(this.url + `movie/${id}?api_key=${this.apiKey}`);

  }
}

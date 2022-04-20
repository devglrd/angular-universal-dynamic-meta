import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CguComponent, HomeComponent, MovieShowComponent, MoviesListComponent} from "../components";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cgu',
    component: CguComponent,
  },
  {
    path: 'movies',
    component: MoviesListComponent,
  },
  {path: 'movies/:id', component: MovieShowComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ApplicationRouting {
}

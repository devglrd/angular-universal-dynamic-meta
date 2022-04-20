import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {COMPONENTS} from "./components";
import {SERVICES} from "./services";
import {ApplicationRouting} from "./routing/app.routing";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ApplicationRouting,
  ],
  providers: [...SERVICES],
})
export class AppModule {
}

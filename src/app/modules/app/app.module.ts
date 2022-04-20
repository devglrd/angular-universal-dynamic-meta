import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {COMPONENTS} from "./components";
import {SERVICES} from "./services";
import {ApplicationRouting} from "./routing/app.routing";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ApplicationRouting,
    SharedModule,
  ],
  providers: [...SERVICES],
})
export class AppModule {
}

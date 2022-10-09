import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsDetailScreenComponent } from "./items-detail-screen/items-detail-screen.component";
import { HomeScreenComponent } from './home-screen/home-screen.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemsDetailScreenComponent,
    HomeScreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

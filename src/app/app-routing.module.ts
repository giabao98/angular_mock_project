import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { ItemsDetailScreenComponent } from "./items-detail-screen/items-detail-screen.component";

const routes: Routes = [
  { path: "", component: HomeScreenComponent },
  { path: "product-detail/:id", component: ItemsDetailScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

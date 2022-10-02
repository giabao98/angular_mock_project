import { Component, OnInit } from "@angular/core";
import { MockApiService } from "../services/apiServices";

@Component({
  selector: "app-header",
  templateUrl: "./page.component.html",
  styleUrls: ["../app.component.scss"],
})
export class HeaderComponent implements OnInit {
  data: any = [];
  constructor(private apiServices: MockApiService) {}
  ngOnInit(): void {
    this.apiServices.getAllProducts().subscribe((res) => {
      this.data = res;
    });
  }

  onSubmitForm(value: any) {
    this.apiServices.getSearchProducts(value).subscribe((res) => {
      this.data = res;
    });
  }

  onSubmitFormVintage(value: any) {
    this.apiServices.getSearchProductsVintage(value).subscribe((res) => {
      this.data = res;
    });
  }
}

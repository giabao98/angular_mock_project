import { Component, OnInit } from "@angular/core";
import { MockApiService } from "../mock-api.service";

@Component({
  selector: "app-home-screen",
  templateUrl: "./home-screen.component.html",
  styleUrls: ["./home-screen.component.scss"],
})
export class HomeScreenComponent implements OnInit {
  data: any = [];
  constructor(private mockApiServices: MockApiService) {}

  ngOnInit(): void {
    this.mockApiServices.getItems().subscribe((response) => {
      this.data = response;
    });
  }

  onSearchWithVintage(value: any) {
    this.mockApiServices.searchAllItemVintage(value).subscribe((response) => {
      this.data = response;
    });
  }

  onSubmitForm(value: any) {
    this.mockApiServices.searchItems(value).subscribe((response) => {
      this.data = response;
    });
  }
}

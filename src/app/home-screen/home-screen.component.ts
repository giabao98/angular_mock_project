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

  onSubmitSearch(value: any) {
    this.mockApiServices.searchItems(value).subscribe((response) => {
      this.data = response;
    });
  }

  allText: any = {
    shopName: 'Shopka',
    sellOnShop: 'Sell on Shopka',
    register: 'Register',
    categoryName: {
      clothing: 'Clothing & Shoes',
      entertainment: 'Entertainment',
      music: 'Music',
      sport: 'Sport & Lifestyle',
      pets: 'Pets',
      kitchen: 'Kitchen Accessories',
      travel: 'Travel Equipment',
      growing: 'Growing & Garden',
      electrical: 'Electrical Tools',
      mother: 'Mother Care',
      toys: 'Toys & Entertainment',
      vintage: 'Vintage'
    }
  }

  getText() {
    return this.allText;
  }
}

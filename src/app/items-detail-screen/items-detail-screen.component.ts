import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MockApiService } from "../mock-api.service";

@Component({
  selector: "app-items-detail-screen",
  templateUrl: "./items-detail-screen.component.html",
  styleUrls: ["./items-detail-screen.component.scss"],
})
export class ItemsDetailScreenComponent implements OnInit {
  constructor(
    private mockApiServices: MockApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  itemDetail: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameters) => {
      this.mockApiServices.getItemDetail(parameters.id).subscribe((res) => {
        this.itemDetail = res;
      });
    });
  }
}

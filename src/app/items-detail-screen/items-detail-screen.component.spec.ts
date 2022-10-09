import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemsDetailScreenComponent } from "./items-detail-screen.component";

describe("ItemsDetailScreenComponent", () => {
  let component: ItemsDetailScreenComponent;
  let fixture: ComponentFixture<ItemsDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsDetailScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOwnerComponent } from './product-owner.component';

describe('ProductOwnerComponent', () => {
  let component: ProductOwnerComponent;
  let fixture: ComponentFixture<ProductOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

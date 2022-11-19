import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbFooterComponent } from './sb-footer.component';

describe('SbFooterComponent', () => {
  let component: SbFooterComponent;
  let fixture: ComponentFixture<SbFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

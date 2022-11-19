import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullGuideComponent } from './full-guide.component';

describe('FullGuideComponent', () => {
  let component: FullGuideComponent;
  let fixture: ComponentFixture<FullGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

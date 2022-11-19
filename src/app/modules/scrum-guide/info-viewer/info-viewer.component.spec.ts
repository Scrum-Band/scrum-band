import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViewerComponent } from './info-viewer.component';

describe('InfoViewerComponent', () => {
  let component: InfoViewerComponent;
  let fixture: ComponentFixture<InfoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

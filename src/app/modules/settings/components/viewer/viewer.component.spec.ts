import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsViewerComponent } from './viewer.component';

describe('ViewerComponent', () => {
  let component: SettingsViewerComponent;
  let fixture: ComponentFixture<SettingsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsViewerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

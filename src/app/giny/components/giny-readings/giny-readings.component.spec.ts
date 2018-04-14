import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinyReadingsComponent } from './giny-readings.component';

describe('GinyReadingsComponent', () => {
  let component: GinyReadingsComponent;
  let fixture: ComponentFixture<GinyReadingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinyReadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinyReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

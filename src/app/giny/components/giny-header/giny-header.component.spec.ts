import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinyHeaderComponent } from './giny-header.component';

describe('GinyHeaderComponent', () => {
  let component: GinyHeaderComponent;
  let fixture: ComponentFixture<GinyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

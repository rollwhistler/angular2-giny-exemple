import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GinyExampleComponent } from './giny-example.component';

describe('GinyExampleComponent', () => {
  let component: GinyExampleComponent;
  let fixture: ComponentFixture<GinyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GinyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GinyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

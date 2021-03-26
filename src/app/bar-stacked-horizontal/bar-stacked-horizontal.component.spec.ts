import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStackedHorizontalComponent } from './bar-stacked-horizontal.component';

describe('BarStackedHorizontalComponent', () => {
  let component: BarStackedHorizontalComponent;
  let fixture: ComponentFixture<BarStackedHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarStackedHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStackedHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

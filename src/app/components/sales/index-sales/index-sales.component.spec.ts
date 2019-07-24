import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSalesComponent } from './index-sales.component';

describe('IndexSalesComponent', () => {
  let component: IndexSalesComponent;
  let fixture: ComponentFixture<IndexSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

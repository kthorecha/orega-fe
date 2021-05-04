import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapercentComponent } from './datapercent.component';

describe('DatapercentComponent', () => {
  let component: DatapercentComponent;
  let fixture: ComponentFixture<DatapercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

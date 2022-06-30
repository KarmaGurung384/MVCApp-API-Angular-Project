import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenorComponent } from './add-venor.component';

describe('AddVenorComponent', () => {
  let component: AddVenorComponent;
  let fixture: ComponentFixture<AddVenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVenorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

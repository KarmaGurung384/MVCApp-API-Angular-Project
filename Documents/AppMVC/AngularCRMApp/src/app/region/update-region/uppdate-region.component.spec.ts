import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppdateRegionComponent } from './uppdate-region.component';

describe('UppdateRegionComponent', () => {
  let component: UppdateRegionComponent;
  let fixture: ComponentFixture<UppdateRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppdateRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppdateRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInterestDataComponent } from './edit-interest-data.component';

describe('EditInterestDataComponent', () => {
  let component: EditInterestDataComponent;
  let fixture: ComponentFixture<EditInterestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInterestDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInterestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

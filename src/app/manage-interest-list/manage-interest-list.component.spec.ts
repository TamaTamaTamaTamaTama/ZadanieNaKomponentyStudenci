import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInterestListComponent } from './manage-interest-list.component';

describe('ManageInterestListComponent', () => {
  let component: ManageInterestListComponent;
  let fixture: ComponentFixture<ManageInterestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageInterestListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageInterestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrpasswordComponent } from './frpassword.component';

describe('FrpasswordComponent', () => {
  let component: FrpasswordComponent;
  let fixture: ComponentFixture<FrpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigncolorComponent } from './assigncolor.component';

describe('AssigncolorComponent', () => {
  let component: AssigncolorComponent;
  let fixture: ComponentFixture<AssigncolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigncolorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigncolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

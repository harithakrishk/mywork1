import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopstmtComponent } from './loopstmt.component';

describe('LoopstmtComponent', () => {
  let component: LoopstmtComponent;
  let fixture: ComponentFixture<LoopstmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopstmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopstmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

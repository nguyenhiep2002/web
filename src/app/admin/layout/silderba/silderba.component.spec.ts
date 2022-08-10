import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilderbaComponent } from './silderba.component';

describe('SilderbaComponent', () => {
  let component: SilderbaComponent;
  let fixture: ComponentFixture<SilderbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilderbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilderbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightloginComponent } from './copyrightlogin.component';

describe('CopyrightloginComponent', () => {
  let component: CopyrightloginComponent;
  let fixture: ComponentFixture<CopyrightloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

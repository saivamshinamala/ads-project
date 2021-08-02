import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteAdsComponent } from './promote-ads.component';

describe('PromoteAdsComponent', () => {
  let component: PromoteAdsComponent;
  let fixture: ComponentFixture<PromoteAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoteAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

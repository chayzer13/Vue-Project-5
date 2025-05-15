import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirdropBannerComponent } from './airdrop-banner.component';

describe('AirdropBannerComponent', () => {
  let component: AirdropBannerComponent;
  let fixture: ComponentFixture<AirdropBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirdropBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirdropBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

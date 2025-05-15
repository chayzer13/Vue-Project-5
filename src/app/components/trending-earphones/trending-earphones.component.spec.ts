import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingEarphonesComponent } from './trending-earphones.component';

describe('TrendingEarphonesComponent', () => {
  let component: TrendingEarphonesComponent;
  let fixture: ComponentFixture<TrendingEarphonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingEarphonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingEarphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

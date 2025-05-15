import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaunchesComponent } from './new-launches.component';

describe('NewLaunchesComponent', () => {
  let component: NewLaunchesComponent;
  let fixture: ComponentFixture<NewLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLaunchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

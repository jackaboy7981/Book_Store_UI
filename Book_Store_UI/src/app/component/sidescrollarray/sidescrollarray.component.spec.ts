import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidescrollarrayComponent } from './sidescrollarray.component';

describe('SidescrollarrayComponent', () => {
  let component: SidescrollarrayComponent;
  let fixture: ComponentFixture<SidescrollarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidescrollarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidescrollarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

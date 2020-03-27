import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopmentComponent } from './mobile-development.component';

describe('MobileDevelopmentComponent', () => {
  let component: MobileDevelopmentComponent;
  let fixture: ComponentFixture<MobileDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

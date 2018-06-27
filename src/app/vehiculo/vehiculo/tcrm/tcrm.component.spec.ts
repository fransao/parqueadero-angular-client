import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcrmComponent } from './tcrm.component';

describe('TcrmComponent', () => {
  let component: TcrmComponent;
  let fixture: ComponentFixture<TcrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

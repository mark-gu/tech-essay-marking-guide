import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecTechnicalComponent } from './sec-technical.component';

describe('SecTechnicalComponent', () => {
  let component: SecTechnicalComponent;
  let fixture: ComponentFixture<SecTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

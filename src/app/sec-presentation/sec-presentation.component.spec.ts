import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecPresentationComponent } from './sec-presentation.component';

describe('SecPresentationComponent', () => {
  let component: SecPresentationComponent;
  let fixture: ComponentFixture<SecPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

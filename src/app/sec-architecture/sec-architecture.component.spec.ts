import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecArchitectureComponent } from './sec-architecture.component';

describe('SecArchitectureComponent', () => {
  let component: SecArchitectureComponent;
  let fixture: ComponentFixture<SecArchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecArchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

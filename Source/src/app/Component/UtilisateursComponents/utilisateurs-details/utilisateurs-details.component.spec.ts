import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursDetailsComponent } from './utilisateurs-details.component';

describe('UtilisateursDetailsComponent', () => {
  let component: UtilisateursDetailsComponent;
  let fixture: ComponentFixture<UtilisateursDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateursDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

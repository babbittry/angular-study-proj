import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieListngComponent } from './new-movie-listng.component';

describe('NewMovieListngComponent', () => {
  let component: NewMovieListngComponent;
  let fixture: ComponentFixture<NewMovieListngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMovieListngComponent]
    });
    fixture = TestBed.createComponent(NewMovieListngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

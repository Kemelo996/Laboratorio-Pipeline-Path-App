import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesMarvelComponent } from './series-marvel.component';
import { SeriesMarvelModule } from './series-marvel.module';

describe('SeriesMarvelComponent', () => {
  let component: SeriesMarvelComponent;
  let fixture: ComponentFixture<SeriesMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesMarvelModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesMarvelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load 10 Marvel series', () => {
    expect(component.series.length).toBe(10);
  });
});

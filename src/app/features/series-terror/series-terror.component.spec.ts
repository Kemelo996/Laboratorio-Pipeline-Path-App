import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesTerrorComponent } from './series-terror.component';
import { SeriesTerrorModule } from './series-terror.module';

describe('SeriesTerrorComponent', () => {
  let component: SeriesTerrorComponent;
  let fixture: ComponentFixture<SeriesTerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesTerrorModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesTerrorComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load 10 horror series', () => {
    expect(component.series.length).toBe(10);
  });
});

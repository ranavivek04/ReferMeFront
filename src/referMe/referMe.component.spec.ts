import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReferMeComponent } from './referMe.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ReferMeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ReferMeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ReferMe'`, () => {
    const fixture = TestBed.createComponent(ReferMeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ReferMe');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ReferMeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ReferMe!');
  });
});

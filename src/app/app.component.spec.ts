import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, 
        ApolloTestingModule 
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
});

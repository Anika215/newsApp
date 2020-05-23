import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsFullPagePage } from './news-full-page.page';

describe('NewsFullPagePage', () => {
  let component: NewsFullPagePage;
  let fixture: ComponentFixture<NewsFullPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFullPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsFullPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

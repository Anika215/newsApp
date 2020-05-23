import { TestBed, inject } from "@angular/core/testing";

import { NewsService } from "./news.service";

describe("NewsService", () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsService);
  });

  it("should be created", inject([NewsService], (service: NewsService) => {
    expect(service).toBeTruthy();
  }));
});

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  pageHeader: any;

  constructor() { }
  
  resetPageHeader(): void {
    this.pageHeader = {
      scrollStartedAt: -1 / 0,
      scrollStartTop: 0,
      expandedScrollTop: 0,
      headerY: 0
    }
  }
}

import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { FlowPageHeader } from '../components/flow-page-header/flow-page-header.component';

@Directive({
  selector: '[flowPageHeaderScroll]'
})
export class FlowPageHeaderScroll implements OnInit {
  @Input('pageHeader') pageHeader: FlowPageHeader;

  constructor(
    private element: ElementRef, private renderer: Renderer2
  ) { }

  ngOnInit() {
    let mutationObserver = new MutationObserver(() => {
      if (this.pageHeader.enabled) {
        this.renderer.listen(this.element.nativeElement, 'ionScroll', (event: CustomEvent) => {
          event && this.pageHeader.onScroll(event.detail.scrollTop)
        });
      }
    });

    mutationObserver.observe(this.pageHeader.element.nativeElement, {
      childList: true
    });
  }
}
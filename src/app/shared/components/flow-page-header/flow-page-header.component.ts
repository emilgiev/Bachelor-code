import { Component, Input, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { FlowBarchartData } from '../../models/flow-barchart-data.model';
import { DeviceService } from '../../services/device/device.service';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FlowPageHeaderTab } from '../../models/flow-page-header-tabs.model';

@Component({
  selector: 'flow-page-header',
  templateUrl: './flow-page-header.component.html',
  styleUrls: ['./flow-page-header.component.scss'],
})

export class FlowPageHeader {
  @Input() activePoints: string[];
  @Input() pageTitle: string;
  @Input() amountTitle: string;
  @Input() chartBarName: string;
  @Input() currencyAmount: number;
  @Input() currencySymbol: number;
  @Input() chartData: FlowBarchartData;
  @Input() hasChart: boolean = false;
  @Output() changeTab: EventEmitter<string> = new EventEmitter<string>();
  @Output() activePoint: EventEmitter<string> = new EventEmitter<string>();
  @Input() tabs: FlowPageHeaderTab[];
  selectedBarPoint: boolean = true;

  topStripeHeight: number;
  collapsedHeight: number;
  ballElement: HTMLElement;
  headerElement: HTMLElement;
  fullHeight: number;
  expandedContentElement: HTMLElement;
  collapsedContentElement: HTMLElement;
  chartElement: HTMLElement;
  enabled: boolean = true;
  onScrollRafRequest: any;
  searchHeader: boolean = !this.hasChart;

  chartPointClick(_point: string) {
    this.activePoint.emit(_point);
  }

  constructor(
    public deviceService: DeviceService,
    public navigationService: NavigationService,
    public element: ElementRef,
    public renderer: Renderer2
  ) {
    this.topStripeHeight = this.deviceService.getStatusbarHeight();

    this.enabled = !0;
    this.topStripeHeight = this.deviceService.getStatusbarHeight();
    this.navigationService.resetPageHeader();
  }

  setHeightOfCollapsedContent(height) {
    this.collapsedHeight = this.topStripeHeight + height
  }

  setCategoryElement(categoryElement) {
    this.ballElement = categoryElement.querySelector(".ball")
  }

  setHeaderElement(headerElement) {
    if((this.headerElement = headerElement,
      headerElement.hasAttribute("data-content-height") ? this.fullHeight = parseInt(headerElement.getAttribute("data-content-height"), 10) : this.fullHeight = headerElement.offsetHeight || 110,
      this.fullHeight += this.topStripeHeight,
      this.expandedContentElement = headerElement.querySelector(".expandedContent"),
      this.collapsedContentElement = headerElement.querySelector(".collapsedContent"),
      this.chartElement = headerElement.querySelector(".chartArea"),
      this.enabled
    ))
      if (this.collapsedContentElement && this.expandedContentElement)
        this.setHeightOfCollapsedContent(this.collapsedContentElement.offsetHeight || 44), this.setFade(0);
      else if (!this.collapsedHeight)
        throw new Error("setHeaderElement: Height of collapsed header not set.");
    
    this.onScroll(0);
  }

  isFullScreenWindow() {
    return this.headerElement.getAttribute("data-fullscreen")
  }

  onScroll(scrollTop) {
    if (!this.headerElement) throw new Error("PageHeaderCollapseController: Header element not set.");
    var now = Date.now();
    if (scrollTop < 0 && (scrollTop = 0), now - this.navigationService.pageHeader.scrollStartedAt > 100) this.navigationService.pageHeader.scrollStartTop = scrollTop, this.navigationService.pageHeader.scrollStartedAt = now;
    else {
      var speed = (scrollTop - this.navigationService.pageHeader.scrollStartTop) / (now - this.navigationService.pageHeader.scrollStartedAt),
        headerIsFullyExpanded = 0 === this.navigationService.pageHeader.headerY;
      if (speed < -4 && this.navigationService.pageHeader.expandedScrollTop + this.fullHeight < scrollTop) this.navigationService.pageHeader.expandedScrollTop = scrollTop - this.fullHeight;
      else if (speed < 0 && headerIsFullyExpanded) return void (this.navigationService.pageHeader.expandedScrollTop = scrollTop)
    }
    var fullyCollapsedY = this.fullHeight - this.collapsedHeight,
      calculatedY = Math.max(0, scrollTop - this.navigationService.pageHeader.expandedScrollTop),
      y = -1 * Math.min(fullyCollapsedY, calculatedY);
    (this.navigationService.pageHeader.headerY !== y || 0 === y && 0 === this.navigationService.pageHeader.headerY) && (this.navigationService.pageHeader.headerY = y, cancelAnimationFrame(this.onScrollRafRequest), this.onScrollRafRequest = requestAnimationFrame(() => {
      this.headerElement.style['transform'] = "translate3d(0, " + y + "px, 0)", this.setFade(calculatedY / fullyCollapsedY)
    }))
  }

  setFade(collapsedFactor) {
    this.expandedContentElement && this.collapsedContentElement && (this.ballElement && (this.ballElement.style.opacity = (1 - collapsedFactor).toString()), this.expandedContentElement.style.opacity = (1 - collapsedFactor).toString(), this.collapsedContentElement.style.opacity = collapsedFactor, collapsedFactor >= 1 ? (this.headerElement.style.zIndex = (10).toString(), this.collapsedContentElement.style.zIndex = (3).toString()) : (this.headerElement.style.zIndex = (1).toString(), this.collapsedContentElement.style.zIndex = (0).toString()))
  }

  resize(scrollTop) {
    this.navigationService.pageHeader.expandedScrollTop = Math.max(0, scrollTop + this.navigationService.pageHeader.headerY)
  }

  expand(scrollTop) {
    this.navigationService.pageHeader.expandedScrollTop = scrollTop, this.onScroll(scrollTop)
  }

  getNewScrollTop(scrollTop) {
    return 0 === this.navigationService.pageHeader.headerY ? scrollTop : scrollTop < -this.navigationService.pageHeader.headerY ? -this.navigationService.pageHeader.headerY : scrollTop
  }

  disableCollapsing () {
    this.enabled = !1
  }

  onTabClick(tabName: string) {
    this.changeTab.emit(tabName);
  }

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, "pageHeader");
    if (this.hasChart)
      this.renderer.addClass(this.element.nativeElement, "hasChart");
    
    this.searchHeader ? this.renderer.setStyle(this.element.nativeElement, "paddingTop", "0") : this.renderer.setStyle(this.element.nativeElement, "paddingTop", this.topStripeHeight + "px");
    
    this.setHeaderElement(this.element.nativeElement);
  }
}
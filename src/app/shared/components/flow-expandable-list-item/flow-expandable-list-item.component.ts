import { Component, Input } from '@angular/core';
@Component({
  selector: 'FlowExpandableListComponent-list',
  templateUrl: './flow-expandable-list-item.component.html',
  styleUrls: ['./flow-expandable-list-item.component.scss']
})
export class FlowExpandableListComponent {

  iconName: string;
  isExpanded: boolean = false;

  @Input() title: string;
  @Input() icon: string;
  @Input() textinput1: string;
  @Input() textinput2: string;
  @Input() content: string;
  @Input() content1: string;
  @Input() classes : any = {};
  
  constructor() { }

  ngOnInit() {
    this.iconName = (!this.checkContent()) ? '' : 'arrow-down';
  }

  checkContent() {
    return (this.content != '');
  }

  onClick() {
    if (this.isExpanded && this.checkContent()) {
      this.isExpanded = false;
      this.iconName = "arrow-down";
    } else if (!this.isExpanded && this.checkContent()) {
      this.isExpanded = true;
      this.iconName = "arrow-up";
    }
  }
}
export class FlowPageHeaderTabs {
  public tabs: FlowPageHeaderTab[];
}

export class FlowPageHeaderTab {
  public name: string;
  public id: string;
  public active?: boolean = false;
  public disabled?: boolean = false;
}
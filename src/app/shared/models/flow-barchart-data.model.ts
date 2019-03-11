export class FlowBarchartData {
  public points: FlowBarChartPoint[];
  public average: number;
  public max: number;
  public barChartLineMode: FlowChartType;
  public barChartPeriodType: number;
  public amountMultiplier: number;
}

export enum FlowChartType {
  Average = 0,
  Max = 1,
  None = 2,
  AverageCount = 3
}

export class FlowBarChartPoint {
  public id: string;
  public label: string;
  public value: number;
  public count: number;
  public spaceBefore?: string;
  public spaceAfter?: string;
  public cutValue?: number
}

export class FlowBarChartBar {
  public height: string;
  public top: string;
  public label: string;
  public id: string;
  public extraClass: string;
}
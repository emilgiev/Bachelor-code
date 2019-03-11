import { Component, Input, ViewChild, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FlowBarchartService } from './flow-barchart.service';
import * as _ from 'lodash';
import { Content } from '@ionic/angular';
import { FlowBarchartData, FlowBarChartPoint, FlowBarChartBar, FlowChartType } from '../../models/flow-barchart-data.model';

@Component({
  selector: 'flow-barchart',
  templateUrl: './flow-barchart.component.html',
  styleUrls: ['./flow-barchart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FlowBarchartComponent {
  @Input() activePoints: string[];

  @Input()
  set data(data: FlowBarchartData) {
    this._data = data;
    this.initData();
  }
  get data(): FlowBarchartData {
    return this._data;
  }

  @Output() onPointClicked: EventEmitter<string> = new EventEmitter();
  @ViewChild('chart') chart: Content;

  pointWidth: number = 48;
  fullChartWidth: number = 0;
  barType: string;
  private _data: FlowBarchartData;
  bars: FlowBarChartBar[];
  points: FlowBarChartPoint[];
  scrolled: boolean = !1;
  xAxisTop: string;
  chartLineTop: string;
  chartLineValue: number;
  chartLineValueIsCurrency: boolean = false;
  chartLineText: string;
  chartLineModeMax: boolean;
  barChartLineMode: number;

  constructor(
    private flowBarchartService: FlowBarchartService
  ) { }

  initData() :void {
    if (!this._data || !this._data.points || 0 === this._data.points.length) return void (this.bars = []);
    var points = this._data.points;

    this.flowBarchartService.cutOutliers(points, 1.5, 1.2, this._data.max ? 1.2 * this._data.max : 1);

    var fullChartWidth = points.length * this.pointWidth;
    fullChartWidth > window.innerWidth && (this.fullChartWidth = fullChartWidth);

    var _a = this.flowBarchartService.findMinAndMax(points, 0, 0),
      min = _a[0],
      max = _a[1],
      range = max - min,
      zeroPos = 0 !== range ? max / range : 1;
    if(
      this.xAxisTop = this.toPercent(zeroPos), 
      this.chartLineModeMax = this._data.barChartLineMode === FlowChartType.Max,
      this._data.amountMultiplier && this._data.amountMultiplier > 0 ? this.barType = "incomeChart" : this.barType = "expenseChart",
      this._data.barChartLineMode === FlowChartType.Average || this._data.barChartLineMode === FlowChartType.AverageCount
    ) {
      if (_.isNil(this._data.average)) throw new Error("Average is not calculated for chart");
      var average = this._data.average;
      0 !== average && (this.chartLineTop = this.toPercent(zeroPos - average / range)),
        this._data.barChartLineMode === FlowChartType.AverageCount ? (
          this.chartLineText = "AVG",
          this.chartLineValue = average
        ):(
          this.chartLineText = "GNS",
          this.chartLineValue = average,
          this.chartLineValueIsCurrency = true
        )
      this.bars = points.map((point) => {
        var pointHeight = point.value / range;
        return {
          height: this.toPercent(Math.abs(pointHeight)),
          top: this.toPercent(point.value < 0 ? zeroPos : zeroPos - pointHeight),
          label: point.label,
          id: point.id,
          extraClass: (point.spaceBefore ? "spaceBefore " : "") + (point.spaceAfter ? " spaceAfter" : "") + (point.cutValue ? " cutValue" : "") + (point.value < 0 ? " negative" : " positive")
        }
      })
    }
    else if (this._data.barChartLineMode === FlowChartType.Max) {
      if (_.isNil(this._data.max)) throw new Error("Max is not calculated for chart");
      
      range = this._data.max > max ? this._data.max - min : range,
      this.chartLineTop = this.toPercent(zeroPos - this._data.max / range),
      this.chartLineValue = this._data.max,
      this.chartLineText = "MAX",
      this.bars = points.map((point) => {
      var pointHeight = point.value / range,
        higherThanMax = point.value > this.chartLineValue,
        chartLineValueHeight = this.chartLineValue / range;
        return {
          height: this.toPercent(Math.abs(pointHeight)),
          top: this.toPercent(point.value < 0 ? zeroPos : zeroPos - pointHeight),
          higherThenMax: higherThanMax,
          negativeHeight: higherThanMax ? this.toPercent(Math.abs(pointHeight) - Math.abs(chartLineValueHeight)) : "0%",
          negativeTop: higherThanMax ? this.toPercent(zeroPos - Math.abs(chartLineValueHeight) - (Math.abs(pointHeight) - Math.abs(chartLineValueHeight))) : "0%",
          label: point.label,
          id: point.id,
          extraClass: (point.spaceBefore ? "spaceBefore " : "") + (point.spaceAfter ? " spaceAfter" : "") + (point.cutValue ? " cutValue" : "") + (point.value < 0 ? " negative" : " positive")
        }
      })
    }
    else this.bars = points.map((point) => {
      var pointHeight = point.value / range;
      return {
        height: this.toPercent(Math.abs(pointHeight)),
        top: this.toPercent(point.value < 0 ? zeroPos : zeroPos - pointHeight),
        label: point.label,
        id: point.id,
        extraClass: (point.spaceBefore ? "spaceBefore " : "") + (point.spaceAfter ? " spaceAfter" : "") + (point.cutValue ? " cutValue" : "") + (point.value < 0 ? " negative" : " positive")
      }
    });
    this.scrolled || (this.scrollToEnd(), this.scrolled = !0);
  }

  scrollToEnd(): void {
    this.chart.getScrollElement()
      .then((el) => {
        this.chart.scrollToPoint(el.scrollWidth - el.clientWidth, undefined);
      })
  }


  toPercent = function (value: number): string {
    return Math.round(100 * value) + "%"
  };

  trackByBars(index, bar): string {
    return bar.id;
  }

  pointClick(pointId: string): void {
    this.onPointClicked.emit(pointId);
  }
}
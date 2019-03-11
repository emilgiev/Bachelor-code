import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FlowBarChartPoint } from '../../models/flow-barchart-data.model';

@Injectable({
  providedIn: 'root'
})
export class FlowBarchartService {
  constructor() { }
  
  median(orderedValues: number[]): number {
    var n = orderedValues.length;
    return 0 === n ? NaN : n % 2 == 1 ? orderedValues[Math.floor(n / 2)] : (orderedValues[n / 2 - 1] + orderedValues[n / 2]) / 2
  };

  findThirdQuartile(points: number[]): number {
    var n = points.length;
    if (n > 0) {
      var orderedValues = points.sort((a, b) => {
        return a - b
      }),
        upperHalf = orderedValues.slice(n % 2 == 0 ? n / 2 : (n + 1) / 2);
      return this.median(upperHalf)
    }
    return NaN
  }
  
  findMinAndMax(points: FlowBarChartPoint[], highestMinimum: number, lowestMaximum: number): number[] {
    void 0 === highestMinimum && (highestMinimum = 1 / 0), void 0 === lowestMaximum && (lowestMaximum = -1 / 0);
    for (var min = highestMinimum, max = lowestMaximum, _i = 0, points_1 = points; _i < points_1.length; _i++) {
      var point = points_1[_i];
      point.value > max && (max = point.value), point.value < min && (min = point.value)
    }
    return [min, max]
  }
  
  cutOutliers(points: FlowBarChartPoint[], q3Multiplier: number, outlierScale: number, minimumCutValue: number): any {
    if (void 0 === q3Multiplier && (q3Multiplier = 1.5), void 0 === outlierScale && (outlierScale = 1), void 0 === minimumCutValue && (minimumCutValue = null), points.length <= 3) return !1;
    if (points.filter((p) => {
      return Math.abs(p.value) > 1e-5
    }).length <= 1) return !1;
    var cutPointsAt = this.findThirdQuartile(points.map((p) => {
      return Math.abs(p.value)
    })) * q3Multiplier;
    return !!_.isNumber(cutPointsAt) && (!(minimumCutValue && cutPointsAt < minimumCutValue) && (points.forEach((p) => {
      Math.abs(p.value) > cutPointsAt && (p.cutValue = p.value, p.value = (p.value < 0 ? -1 : 1) * cutPointsAt * outlierScale)
    }), !0))
  }
}

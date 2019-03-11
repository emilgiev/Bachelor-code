import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class DeviceService {
	constructor(private ionicPlatform: Platform) { }

	getStatusbarHeight(): number {
		var defaultStatusbarHeight = this.ionicPlatform.is('ios') ? 20 : 0;
		var getHeight = function(property) {
			var safeInsetTop = getComputedStyle(document.body).getPropertyValue(property);
			if (safeInsetTop) {
				return parseInt(safeInsetTop, 10) || defaultStatusbarHeight
			}
			return defaultStatusbarHeight
		};

		return CSS.supports("padding-top: env(safe-area-inset-top)") ? getHeight("--notch-env-top") : CSS.supports("padding-top: constant(safe-area-inset-top)") ? getHeight("--notch-constant-top") : defaultStatusbarHeight
	}
}

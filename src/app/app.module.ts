import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import { InterceptorModule } from './interceptor.module';

import { VouchersModule } from './vouchers/vouchers.module';
import { VoucherListPage } from './vouchers/pages/voucher-list/voucher-list.page';

import { IonicStorageModule } from '@ionic/storage';
import { AuthFlowService } from './services/invoiceflow/authflow.service';

import { FlowButtonModule } from './shared/components/flow-button/flow-button.module';
import { FlowImageGallery } from './shared/components/flow-image-gallery/flow-image-gallery.component';


@NgModule({
  declarations: [AppComponent,FlowImageGallery],
  entryComponents: [FlowImageGallery],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    VouchersModule,
    FlowButtonModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthFlowService,
    VoucherListPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

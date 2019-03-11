import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InvoiceFlowService } from '../services/invoiceflow/invoiceflow.service';
import { PreviousRouteService } from '../services/invoiceflow/previousRoute.service';

import { VoucherListItemComponent } from './components/voucher-list-item/voucher-list-item.component';

import { VoucherDetailsPage } from './pages/voucher-details/voucher-details.page';
import { VoucherDetailsComponent } from './components/voucher-details/voucher-details.component';

import { VouchersRoutingModule } from './vouchers.router.module';

import { PopoverSmallComponent } from '../shared/components/flow-popover-small/popover-small.component';
import { PopoverLargeComponent } from '../shared/components/flow-popover-large/popover-large.component';

import { VoucherFrontPage } from './pages/voucher-frontpage/voucher-frontpage.page';
import { FlowFrontpageGridLine } from '../vouchers/components/grid-line/grid-line';
import { FlowPageHeaderModule } from '../shared/components/flow-page-header/flow-page-header.module';
import { FlowButtonModule } from '../shared/components/flow-button/flow-button.module';
import { FlowExpandableListComponent } from '../shared/components/flow-expandable-list-item/flow-expandable-list-item.component';
import { VoucherListPage } from './pages/voucher-list/voucher-list.page';

import { SettingsFlowService } from '../services/invoiceflow/settingsflow.service';
import { AppStateService } from '../services/invoiceflow/appState.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    VouchersRoutingModule,
    FlowPageHeaderModule,
    FlowButtonModule
  ],
  providers: [
    InvoiceFlowService,
    PreviousRouteService,
    PopoverSmallComponent,
    PopoverLargeComponent,
    SettingsFlowService,
    AppStateService
  ],
  declarations: [
    VoucherListItemComponent,
    VoucherDetailsPage,
    VoucherDetailsComponent,
    VoucherFrontPage,
    FlowFrontpageGridLine,
    PopoverSmallComponent,
    PopoverLargeComponent,
    FlowExpandableListComponent,
    VoucherListPage
  ],
  entryComponents:[
    PopoverSmallComponent,
    PopoverLargeComponent]
})
export class VouchersModule { }
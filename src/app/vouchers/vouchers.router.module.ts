import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VoucherListPage } from './pages/voucher-list/voucher-list.page';
import { VoucherDetailsPage } from './pages/voucher-details/voucher-details.page';
import { VoucherFrontPage } from './pages/voucher-frontpage/voucher-frontpage.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'vouchers/list',
        component: VoucherListPage
      },
      {
        path: 'details/:voucherId',
        component: VoucherDetailsPage
      },
      { 
        path: 'vouchers/home',
        component: VoucherFrontPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VouchersRoutingModule { }

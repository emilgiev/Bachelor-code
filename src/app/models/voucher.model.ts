export class Voucher {
  public id: number;
  public text: string;
  public grossAmount: number;
  public vendorId: string;
  public vendorName: string;
  public vendorType: string;
  public dateRecieved: string;
  public dueDate: string;
  public invoiceId: string;
  public note: string;
  public invoiceType: number;
  public dataAreaId: string;
  public currencyCode: string;
  public vatCode: string;
  public vatPercent: number;
  public fikCode: string;
  public paymentId: string;
  public bankaccount: string;
  public voucherId: string;
  public dim1: string;
  public dim2: string;
  public dim3: string;
  public projid: string;
  public creBy: number;
  public creDate: number;
  public rspUser: number;
  public appUser1: number;
  public appUser2: number;
  public originalImagePath: string;
  public status: number;
  public app1: number;
  public app2: number;
  public ItemGroup: string;
  public purchaseIdCollection: string;
  public CustNumber: string;
  public vatAccountId: string;
  public ERPFlag: number;
  public LastChanged: string;
  public errorText: string;
  public Dim4: string;
  public Dim5: string;
  public Dim6: string;
  public RegisterFlag: number;
  public ApprovalFlag: number;
  public nettoAmount: number;
  public xmlPath: string;
  public journalRegisterPosted: string;
  public journalApprovalPosted: string;
  public approverGroup: string;
  public purchaseMatch: boolean;
  public referenceImagePath: string;
  public approverText: string;
  public rateBeforeTax: number;
  public rateBeforeTaxCode: string;
  public rateAfterTax: number;
  public rateAfterTaxCode: string;
  public customSearch: string;
  public vatAmount: number;
  public DistributionType: number;
  public openPurchase: boolean;
  public scanfakImagePath: string;
  public purchaseSum: number;
  public axRegisterFilePath: string;
  public hasUserNote: boolean;
  public deliveryNotesCollection: string;
  public isManuallyCompleted: boolean;
  public xmlAttachmentPath: string;
  public secondaryImagePath: string;
  public oioImage: string;


  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InvoiceFlowService } from './invoiceflow.service';

describe('InvoiceFlowService', () => {

  let injector: TestBed;
  let service: InvoiceFlowService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceFlowService],
      imports: [
        HttpClientTestingModule
      ],
    });

    injector = getTestBed();
    service = injector.get(InvoiceFlowService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getList', () => {
    it('expects service to fetch list of 5 vouchers', () => {
      service.getList().subscribe(vouchers => {
        expect(vouchers.length).toBe(5);
      })
      const req = httpMock.expectOne(`${service.API_URL}/FnTest/GetList?take=5`);
      expect(req.request.method).toEqual('POST');
    });

    it('expects service to fetch list of 3 vouchers', () => {
      service.getList(3).subscribe(vouchers => {
        expect(vouchers.length).toBe(3);
      })
      const req = httpMock.expectOne(`${service.API_URL}/FnTest/GetList?take=3`);
      expect(req.request.method).toEqual('POST');
    });
  });

  it('should be created', inject([InvoiceFlowService], (service: InvoiceFlowService) => {
    expect(service).toBeTruthy();
  }));
});

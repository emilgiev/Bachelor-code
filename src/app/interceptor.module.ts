import { Injectable, NgModule, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AuthFlowService } from './services/invoiceflow/authflow.service';
import { switchMap } from 'rxjs/operators';


@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor{
    constructor(public authFlowService: AuthFlowService){}

    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url.endsWith('/Token')) {
            return next.handle(request);
        }
        
        return from(this.authFlowService.getToken())
        .pipe(switchMap(token => {
             const headers = request.headers
                      .set('Authorization', `Bearer ${token}`)
                      .append('Content-Type', 'application/json');
               const reqClone = request.clone({
               headers 
              });
            return next.handle(reqClone);
       }));
    }
};
@NgModule({
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }]
})
export class InterceptorModule { }
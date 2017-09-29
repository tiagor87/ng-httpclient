import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        setHeaders: {
          Authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyJUeXBlOiBVc2VyIHwgSWQ6IDIiLCJVc2VyIl0sImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInJvbGUiOlsiVXNlciIsIlVzZXJWaWV3ZXIiLCJBY2NvdW50Q3JlYXRvciIsInJvbGUxIiwicm9sZTIiXSwibmJmIjoxNTA2NzE0NjY1LCJleHAiOjE1MDY4MDEwNjUsImlhdCI6MTUwNjcxNDY2NSwiaXNzIjoiTmlibyIsImF1ZCI6Ik5pYm8ifQ.c2b_AGvgkOExATbTa6S8IkNm7bC_OmHGoR1AYkk8K5WMHA3_JdEIpfesIk1hGGbnqtncM1hjcGG_qGerdwIE3jl_lnUpGDvRIDQ2iUG5EDPraVTESXBNSnGGgsPeB_DKTZjf2XGwl_X16RLgTkKs_x410ZXCTC-uKJI1ae1YTT72XhY7vz2kuoQxzY3Bai6NBwB8aNVH54PL0uzBQXmNXXLbDhxzwsc_XLCiRg6vNgY582BMoco9WWhrJ4rkmEwIjLm1xG4GaMOiGIrHC_cFAX4avm1ZaYNQXZdDqnCqCPYfKPKKo429T3TzEv9ZMIqvksu2q2G1ogmLEgySa0iNlA'
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnitOfWorkService {

  httOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) {
  }

  public getQueryable<T>(url): Observable<T> {
    return this.httpClient.get<T>(url).pipe(retry(1), catchError(this.errorHandler));
  }

  public getById<T>(url): Observable<T> {
    return this.httpClient.get<T>(url).pipe(retry(1), catchError(this.errorHandler));
  }

  public create<T>(url, data: T): Observable<T> {
    return this.httpClient.post<T>(url, JSON.stringify(data), this.httOptions).pipe(retry(1), catchError(this.errorHandler));
  }

  public update<T>(url, data: T): Observable<T> {
    return this.httpClient.put<T>(url, JSON.stringify(data), this.httOptions).pipe(retry(1), catchError(this.errorHandler));
  }

  public delete(url): Observable<boolean> {
     return this.httpClient.delete<boolean>(url).pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

/*

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    return next.handle(request);
  }
}*/

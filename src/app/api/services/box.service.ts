/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BoxDTO } from '../models/box-dto';
@Injectable({
  providedIn: 'root',
})
class BoxService extends __BaseService {
  static readonly getApiBoxPath = '/api/Box';
  static readonly postApiBoxPath = '/api/Box';
  static readonly putApiBoxPath = '/api/Box';
  static readonly deleteApiBoxIdPath = '/api/Box/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiBoxResponse(): __Observable<__StrictHttpResponse<Array<BoxDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Box`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BoxDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiBox(): __Observable<Array<BoxDTO>> {
    return this.getApiBoxResponse().pipe(
      __map(_r => _r.body as Array<BoxDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiBoxResponse(body?: BoxDTO): __Observable<__StrictHttpResponse<BoxDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Box`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BoxDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiBox(body?: BoxDTO): __Observable<BoxDTO> {
    return this.postApiBoxResponse(body).pipe(
      __map(_r => _r.body as BoxDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiBoxResponse(body?: BoxDTO): __Observable<__StrictHttpResponse<BoxDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Box`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BoxDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putApiBox(body?: BoxDTO): __Observable<BoxDTO> {
    return this.putApiBoxResponse(body).pipe(
      __map(_r => _r.body as BoxDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  deleteApiBoxIdResponse(id: number): __Observable<__StrictHttpResponse<BoxDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Box/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BoxDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  deleteApiBoxId(id: number): __Observable<BoxDTO> {
    return this.deleteApiBoxIdResponse(id).pipe(
      __map(_r => _r.body as BoxDTO)
    );
  }
}

module BoxService {
}

export { BoxService }

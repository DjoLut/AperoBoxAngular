/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LigneProduitDTO } from '../models/ligne-produit-dto';
@Injectable({
  providedIn: 'root',
})
class LigneProduitService extends __BaseService {
  static readonly postApiLigneProduitPath = '/api/LigneProduit';
  static readonly putApiLigneProduitPath = '/api/LigneProduit';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiLigneProduitResponse(body?: LigneProduitDTO): __Observable<__StrictHttpResponse<LigneProduitDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/LigneProduit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LigneProduitDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiLigneProduit(body?: LigneProduitDTO): __Observable<LigneProduitDTO> {
    return this.postApiLigneProduitResponse(body).pipe(
      __map(_r => _r.body as LigneProduitDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiLigneProduitResponse(body?: LigneProduitDTO): __Observable<__StrictHttpResponse<LigneProduitDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/LigneProduit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LigneProduitDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putApiLigneProduit(body?: LigneProduitDTO): __Observable<LigneProduitDTO> {
    return this.putApiLigneProduitResponse(body).pipe(
      __map(_r => _r.body as LigneProduitDTO)
    );
  }
}

module LigneProduitService {
}

export { LigneProduitService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProduitDTO } from '../models/produit-dto';
@Injectable({
  providedIn: 'root',
})
class ProduitService extends __BaseService {
  static readonly getApiProduitPath = '/api/Produit';
  static readonly postApiProduitPath = '/api/Produit';
  static readonly getApiProduitIdPath = '/api/Produit/id';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiProduitResponse(): __Observable<__StrictHttpResponse<Array<ProduitDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Produit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProduitDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiProduit(): __Observable<Array<ProduitDTO>> {
    return this.getApiProduitResponse().pipe(
      __map(_r => _r.body as Array<ProduitDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiProduitResponse(body?: ProduitDTO): __Observable<__StrictHttpResponse<ProduitDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Produit`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProduitDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiProduit(body?: ProduitDTO): __Observable<ProduitDTO> {
    return this.postApiProduitResponse(body).pipe(
      __map(_r => _r.body as ProduitDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getApiProduitIdResponse(id?: number): __Observable<__StrictHttpResponse<ProduitDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Produit/id`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProduitDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getApiProduitId(id?: number): __Observable<ProduitDTO> {
    return this.getApiProduitIdResponse(id).pipe(
      __map(_r => _r.body as ProduitDTO)
    );
  }
}

module ProduitService {
}

export { ProduitService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AdresseDTO } from '../models/adresse-dto';
@Injectable({
  providedIn: 'root',
})
class AdresseService extends __BaseService {
  static readonly getApiAdressePath = '/api/Adresse';
  static readonly postApiAdressePath = '/api/Adresse';
  static readonly getApiAdresseIdPath = '/api/Adresse/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiAdresseResponse(): __Observable<__StrictHttpResponse<Array<AdresseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Adresse`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AdresseDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiAdresse(): __Observable<Array<AdresseDTO>> {
    return this.getApiAdresseResponse().pipe(
      __map(_r => _r.body as Array<AdresseDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiAdresseResponse(body?: AdresseDTO): __Observable<__StrictHttpResponse<AdresseDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Adresse`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdresseDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiAdresse(body?: AdresseDTO): __Observable<AdresseDTO> {
    return this.postApiAdresseResponse(body).pipe(
      __map(_r => _r.body as AdresseDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getApiAdresseIdResponse(id: number): __Observable<__StrictHttpResponse<Array<AdresseDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Adresse/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AdresseDTO>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getApiAdresseId(id: number): __Observable<Array<AdresseDTO>> {
    return this.getApiAdresseIdResponse(id).pipe(
      __map(_r => _r.body as Array<AdresseDTO>)
    );
  }
}

module AdresseService {
}

export { AdresseService }

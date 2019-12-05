/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LigneCommandeDTO } from '../models/ligne-commande-dto';
@Injectable({
  providedIn: 'root',
})
class LigneCommandeService extends __BaseService {
  static readonly postApiLigneCommandePath = '/api/LigneCommande';
  static readonly putApiLigneCommandePath = '/api/LigneCommande';

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
  postApiLigneCommandeResponse(body?: LigneCommandeDTO): __Observable<__StrictHttpResponse<LigneCommandeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/LigneCommande`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LigneCommandeDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiLigneCommande(body?: LigneCommandeDTO): __Observable<LigneCommandeDTO> {
    return this.postApiLigneCommandeResponse(body).pipe(
      __map(_r => _r.body as LigneCommandeDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiLigneCommandeResponse(body?: LigneCommandeDTO): __Observable<__StrictHttpResponse<LigneCommandeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/LigneCommande`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LigneCommandeDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putApiLigneCommande(body?: LigneCommandeDTO): __Observable<LigneCommandeDTO> {
    return this.putApiLigneCommandeResponse(body).pipe(
      __map(_r => _r.body as LigneCommandeDTO)
    );
  }
}

module LigneCommandeService {
}

export { LigneCommandeService }

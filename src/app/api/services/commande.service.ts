/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeDTO } from '../models/commande-dto';
@Injectable({
  providedIn: 'root',
})
class CommandeService extends __BaseService {
  static readonly getApiCommandePath = '/api/Commande';
  static readonly postApiCommandePath = '/api/Commande';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiCommandeResponse(): __Observable<__StrictHttpResponse<Array<CommandeDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Commande`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiCommande(): __Observable<Array<CommandeDTO>> {
    return this.getApiCommandeResponse().pipe(
      __map(_r => _r.body as Array<CommandeDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiCommandeResponse(body?: CommandeDTO): __Observable<__StrictHttpResponse<CommandeDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Commande`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiCommande(body?: CommandeDTO): __Observable<CommandeDTO> {
    return this.postApiCommandeResponse(body).pipe(
      __map(_r => _r.body as CommandeDTO)
    );
  }
}

module CommandeService {
}

export { CommandeService }

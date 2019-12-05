/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDTO } from '../models/utilisateur-dto';
@Injectable({
  providedIn: 'root',
})
class UtilisateurService extends __BaseService {
  static readonly getApiUtilisateurPath = '/api/Utilisateur';
  static readonly postApiUtilisateurPath = '/api/Utilisateur';
  static readonly putApiUtilisateurPath = '/api/Utilisateur';
  static readonly getApiUtilisateurIdPath = '/api/Utilisateur/{id}';
  static readonly deleteApiUtilisateurIdPath = '/api/Utilisateur/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiUtilisateurResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Utilisateur`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiUtilisateur(): __Observable<Array<UtilisateurDTO>> {
    return this.getApiUtilisateurResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiUtilisateurResponse(body?: UtilisateurDTO): __Observable<__StrictHttpResponse<UtilisateurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Utilisateur`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiUtilisateur(body?: UtilisateurDTO): __Observable<UtilisateurDTO> {
    return this.postApiUtilisateurResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDTO)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  putApiUtilisateurResponse(body?: UtilisateurDTO): __Observable<__StrictHttpResponse<UtilisateurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Utilisateur`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  putApiUtilisateur(body?: UtilisateurDTO): __Observable<UtilisateurDTO> {
    return this.putApiUtilisateurResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getApiUtilisateurIdResponse(id: number): __Observable<__StrictHttpResponse<UtilisateurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Utilisateur/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getApiUtilisateurId(id: number): __Observable<UtilisateurDTO> {
    return this.getApiUtilisateurIdResponse(id).pipe(
      __map(_r => _r.body as UtilisateurDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  deleteApiUtilisateurIdResponse(id: number): __Observable<__StrictHttpResponse<UtilisateurDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Utilisateur/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  deleteApiUtilisateurId(id: number): __Observable<UtilisateurDTO> {
    return this.deleteApiUtilisateurIdResponse(id).pipe(
      __map(_r => _r.body as UtilisateurDTO)
    );
  }
}

module UtilisateurService {
}

export { UtilisateurService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommentaireDTO } from '../models/commentaire-dto';
@Injectable({
  providedIn: 'root',
})
class CommentaireService extends __BaseService {
  static readonly getApiCommentairePath = '/api/Commentaire';
  static readonly postApiCommentairePath = '/api/Commentaire';
  static readonly getApiCommentaireIdPath = '/api/Commentaire/{id}';
  static readonly deleteApiCommentaireIdPath = '/api/Commentaire/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
  getApiCommentaireResponse(): __Observable<__StrictHttpResponse<Array<CommentaireDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Commentaire`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommentaireDTO>>;
      })
    );
  }
  /**
   * @return Success
   */
  getApiCommentaire(): __Observable<Array<CommentaireDTO>> {
    return this.getApiCommentaireResponse().pipe(
      __map(_r => _r.body as Array<CommentaireDTO>)
    );
  }

  /**
   * @param body undefined
   * @return Success
   */
  postApiCommentaireResponse(body?: CommentaireDTO): __Observable<__StrictHttpResponse<CommentaireDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Commentaire`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentaireDTO>;
      })
    );
  }
  /**
   * @param body undefined
   * @return Success
   */
  postApiCommentaire(body?: CommentaireDTO): __Observable<CommentaireDTO> {
    return this.postApiCommentaireResponse(body).pipe(
      __map(_r => _r.body as CommentaireDTO)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getApiCommentaireIdResponse(id: number): __Observable<__StrictHttpResponse<Array<CommentaireDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Commentaire/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommentaireDTO>>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  getApiCommentaireId(id: number): __Observable<Array<CommentaireDTO>> {
    return this.getApiCommentaireIdResponse(id).pipe(
      __map(_r => _r.body as Array<CommentaireDTO>)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  deleteApiCommentaireIdResponse(id: number): __Observable<__StrictHttpResponse<CommentaireDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Commentaire/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentaireDTO>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Success
   */
  deleteApiCommentaireId(id: number): __Observable<CommentaireDTO> {
    return this.deleteApiCommentaireIdResponse(id).pipe(
      __map(_r => _r.body as CommentaireDTO)
    );
  }
}

module CommentaireService {
}

export { CommentaireService }

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  coreApiBaseUrl = '';
  constructor() { 
    this.coreApiBaseUrl = environment.baseURL;
  }

  
  getCoreApiUrl(urlPath: string) {
    return this.coreApiBaseUrl +'/'+ urlPath;
  }

  convertToHttpParams(params: any) {
    if (params) {
      return new HttpParams({ fromObject: params })
    }
  }
}

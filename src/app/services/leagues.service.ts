import { Injectable } from '@angular/core';
import { StandingAPIResponseModel, StandingsRequestParameters } from '../models/leagues.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiHelperService } from './api-helper.service';
import { environment } from 'src/environments/environment';
import { LOCAL_STORAGE_KEY } from '../common/constants';
import { FixturesAPIResponseModel, FixturesRequestParameters } from '../models/fixtures.model';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  constructor(
    private httpClient: HttpClient,
    private apiHelper: ApiHelperService
  ) { }

  getStandings(params: StandingsRequestParameters): Observable<StandingAPIResponseModel> {
    const httpParams = this.apiHelper.convertToHttpParams(params);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', environment.sportsURL);
    headers = headers.append('x-rapidapi-key', environment.sportsAPIKey);
    return this.httpClient.get<StandingAPIResponseModel>(this.apiHelper.getCoreApiUrl('standings'), { params: httpParams, headers });
  }
  
  getFixtures(params: FixturesRequestParameters): Observable<FixturesAPIResponseModel> {
    const httpParams = this.apiHelper.convertToHttpParams(params);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('x-rapidapi-host', environment.sportsURL);
    headers = headers.append('x-rapidapi-key', environment.sportsAPIKey);
    return this.httpClient.get<FixturesAPIResponseModel>(this.apiHelper.getCoreApiUrl(LOCAL_STORAGE_KEY.FIXTURES), { params: httpParams, headers });
  }
}

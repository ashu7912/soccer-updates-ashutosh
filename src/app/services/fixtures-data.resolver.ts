import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators'
import { LeaguesService } from './leagues.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CURRENT_SEASON, LOCAL_STORAGE_KEY } from '../common/constants';
import { FixturesAPIResponseModel, FixturesRequestParameters } from '../models/fixtures.model';

@Injectable({
  providedIn: 'root'
})
export class FixturesDataResolver implements Resolve<FixturesAPIResponseModel> {
  constructor(
    private leaguesService: LeaguesService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FixturesAPIResponseModel> {
    let params: FixturesRequestParameters = {
      team: route.params['teamId'],
      season: CURRENT_SEASON,
      last: 10
    }
    return this.leaguesService.getFixtures(params)
      .pipe(
        switchMap((res: FixturesAPIResponseModel) => {
          if (res.response.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY.FIXTURES, JSON.stringify(res))
            return of(res)
          } else {
            return EMPTY;
          }
        }),
        catchError((err: HttpErrorResponse) => {
          console.log('Somthing went Wrong', err?.message);
          return EMPTY;
        })
      )
  }
}

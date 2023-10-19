import { Component, OnInit } from '@angular/core';
import { CountryModel, LeagueDetailsModel, StandingAPIResponseModel, StandingsRequestParameters, TeamStandingDetailsModel } from '../models/leagues.model';
import { LeaguesService } from '../services/leagues.service';
import { COUNTRY_LIST, CURRENT_SEASON, LOCAL_STORAGE_KEY } from '../common/constants';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-soc-dashboard',
  templateUrl: './soc-dashboard.component.html',
  styleUrls: ['./soc-dashboard.component.scss']
})
export class SocDashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private leaguesService: LeaguesService
  ) { }

  currentSeason = CURRENT_SEASON;
  countriesList: CountryModel[] = COUNTRY_LIST;

  selectedLeagueObject: LeagueDetailsModel;
  selectedLeagueStandings: TeamStandingDetailsModel[];
  selectedCountryObj: CountryModel


  ngOnInit(): void {
    if (localStorage.getItem(LOCAL_STORAGE_KEY.SELECTED_COUNTRY)) {
      this.getStandings(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.SELECTED_COUNTRY)));
      localStorage.removeItem(LOCAL_STORAGE_KEY.SELECTED_COUNTRY);
      return
    }
    this.getStandings(this.countriesList[0]);
  }

  getStandings(countryObj: CountryModel) {
    this.selectedCountryObj = countryObj;
    if (localStorage.getItem(countryObj.value)) {
      this.selectedLeagueObject = JSON.parse(localStorage.getItem(countryObj.value));
      this.selectedLeagueStandings = this.getLeagueStandings();
      return
    }

    let params: StandingsRequestParameters = {
      league: countryObj.id,
      season: this.currentSeason
    }
    this.leaguesService.getStandings(params)
      .subscribe((data: StandingAPIResponseModel) => {
        if (data.response.length > 0) {
          this.selectedLeagueObject = data.response[0].league;
          this.selectedLeagueStandings = this.getLeagueStandings();
          localStorage.setItem(countryObj.value, JSON.stringify(this.selectedLeagueObject));
        } else {
          this.selectedLeagueStandings = [];
        }
      },
        (err: HttpErrorResponse) => {
          console.log('Somthing went Wrong', err?.message);
          this.selectedLeagueStandings = [];
        }
      )
  }

  getLeagueStandings(): TeamStandingDetailsModel[] {
    return this.selectedLeagueObject.standings[0]
  }

  navigateToFixtures(team: TeamStandingDetailsModel) {
    localStorage.setItem(LOCAL_STORAGE_KEY.SELECTED_COUNTRY, JSON.stringify(this.selectedCountryObj));
    this.router.navigateByUrl(`/scorecard/${team.team.id}`)
  }

}

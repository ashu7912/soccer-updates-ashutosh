import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FixtureObjectModel, FixturesAPIResponseModel } from '../models/fixtures.model';

@Component({
  selector: 'app-soc-fixtures',
  templateUrl: './soc-fixtures.component.html',
  styleUrls: ['./soc-fixtures.component.scss']
})
export class SocFixturesComponent implements OnInit {

  fixturesList: FixtureObjectModel[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { fixturesData: FixturesAPIResponseModel }) => {
      this.fixturesList = data.fixturesData.response;
    })
  }

  backToDashboard() {
    this.router.navigateByUrl('/scorecard');
  }

}

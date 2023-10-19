import { GetSportsAPIResponseModel, LeagueDetailsModel, TeamDetailsModel } from "./leagues.model";

export interface FixturesRequestParameters {
    team: number | string,
    season: number | string,
    last: number | string
}

export interface FixturePeriodsModel {
    first: number,
    second: number
}

export interface FixtureVenueModel {
    id: number,
    name: string,
    city: string
}

export interface FixtureStatusModel {
    long: string,
    short: string,
    elapsed: number
}

export interface FixtureDetailsModel {
    id: number,
    referee: string,
    timezone: string,
    date: string,
    timestamp: number,
    periods: FixturePeriodsModel,
    venue: FixtureVenueModel,
    status: FixtureStatusModel
}

export interface FixtureTeamsModel {
    home: TeamDetailsModel,
    away: TeamDetailsModel
}

export interface GoalDetailsModel {
    home: number,
    away: number
}

export interface ScoreDetailsModel {
    halftime: GoalDetailsModel,
    fulltime: GoalDetailsModel,
    extratime: GoalDetailsModel,
    penalty: GoalDetailsModel
}

export interface FixtureObjectModel {
    fixture: FixtureDetailsModel,
    league: LeagueDetailsModel,
    teams: FixtureTeamsModel,
    goals: GoalDetailsModel,
    score: ScoreDetailsModel
}

export interface FixturesAPIResponseModel extends GetSportsAPIResponseModel {
    parameters: FixturesRequestParameters,
    response: [] | FixtureObjectModel[]
}
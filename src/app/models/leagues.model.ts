export interface CountryModel {
    id: number,
    title: string,
    value: string
}

export interface StandingsRequestParameters {
    league: number | string,
    season: number | string
}

export interface GetErrorsModel {
    time: string,
    bug: string,
    report: string
}

export interface GetPagingModel {
    current: number,
    total: number
}

export interface TeamDetailsModel {
    id: number,
    name: string,
    logo: string,
    winner?: boolean
}

export interface TeamGoalsModel {
    for: number,
    against: number
}

export interface TeamStatsModel {
    played: number,
    win: number,
    draw: number,
    lose: number,
    goals: TeamGoalsModel
}
export interface TeamStandingDetailsModel {
    rank: number,
    team: TeamDetailsModel,
    points: number,
    goalsDiff: number,
    group: string,
    form: string,
    status: string
    description: string,
    all: TeamStatsModel,
    home: TeamStatsModel,
    away: TeamStatsModel,
    update: string
}

export interface LeagueDetailsModel {
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number | string,
    standings?: [TeamStandingDetailsModel[]],
    round?: string
}

export interface GetSportsAPIResponseModel {
    get: string,
    errors: [] | GetErrorsModel,
    results: number,
    paging: GetPagingModel,
}

export interface StandingAPIResponseModel extends GetSportsAPIResponseModel {
    parameters: StandingsRequestParameters,
    response: [] | [{league: LeagueDetailsModel}]
}
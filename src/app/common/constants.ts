import { CountryModel } from "../models/leagues.model";

export const CURRENT_SEASON = new Date().getFullYear();
export const COUNTRY_LIST: CountryModel[] = [
    {
        id: 39,
        title: 'England',
        value: 'england'
    },
    {
        id: 140,
        title: 'Spain',
        value: 'spain'
    },
    {
        id: 61,
        title: 'France',
        value: 'france'
    },
    {
        id: 78,
        title: 'Germany',
        value: 'germany'
    },
    {
        id: 135,
        title: 'Italy',
        value: 'italy'
    }
];

export const LOCAL_STORAGE_KEY = {
    FIXTURES: 'fixtures',
    SELECTED_COUNTRY: 'selectedCountry'
}

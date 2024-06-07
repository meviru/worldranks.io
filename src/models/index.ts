import { ReactNode } from "react";

export interface Country {
    name: string;
    population: number;
    area: number;
    region: string;
    flags: string;
}

export interface CountryContextType {
    countryList: Country[];
    regionList: any[];
    isLoading: boolean;
    sortCountries: (value: number) => void;
    filterByRegion: (value: string) => void;
}

export interface CountryListContextType {
    countryList: Country[];
    getCountries: (countries: Country[]) => void;
    sortCountries: () => void;
    filterByRegion: () => void;
    filterByStatus: () => void;
    searchCountry: () => void;
}

export interface Children {
    children: ReactNode
}
export interface Country {
    name: string;
    population: number;
    area: number;
    region: string;
    flags: string;
}

export interface CountryListContextType {
    countryList: Country[];
    getCountries: (countries: Country[]) => void;
    sortCountries: () => void;
    filterByRegion: () => void;
    filterByStatus: () => void;
    searchCountry: () => void;
}
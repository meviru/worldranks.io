import { createContext, useEffect, useState } from "react";
import { Country, Children, CountryContextType } from "../models";
import { Constants } from "../constants";

export const CountryContext = createContext<CountryContextType>({
    countryList: [],
    regionList: [],
    isLoading: false,
    sortCountries: () => { },
    filterByRegion: () => { },
});

let ogCountries: any = [];

const CountryProvider = ({ children }: Children) => {
    const [countryList, setCountryList] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [regionList, setRegionList] = useState([]);

    const fetchCountries = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://countryinfoapi.com/api/countries');
            ogCountries = await response.json();
            setCountryList(ogCountries);

            const uniqueRegions: any = [...new Set(ogCountries.map((country: any) => country.region))];
            setRegionList(uniqueRegions);

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const sortCountries = (value: number) => {
        switch (value) {
            case Constants.SORTBY.POPULATION:
                const sortByPopulationList = [...ogCountries].sort((a, b) => a.population - b.population).reverse()
                setCountryList(sortByPopulationList);
                break;
            case Constants.SORTBY.NAME:
                const sortByNameList = [...ogCountries].sort((a, b) => { return (a.name > b.name ? 1 : (a.name === b.name ? 0 : -1)) })
                setCountryList(sortByNameList);
                break;
            case Constants.SORTBY.AREA:
                const sortByAreaList = [...ogCountries].sort((a, b) => a.area - b.area).reverse()
                setCountryList(sortByAreaList);
                break;

        }
    }

    const filterByRegion = (region: string) => {
        const countriesByRegion = [...ogCountries].filter((country) => country.region === region);
        setCountryList(countriesByRegion);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    return <CountryContext.Provider value={{ countryList, isLoading, regionList, sortCountries, filterByRegion }}>
        {children}
    </CountryContext.Provider>
}
export default CountryProvider;
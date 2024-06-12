import { createContext, useEffect, useState } from "react";
import { Country, Children, CountryContextType } from "../models";
import { Constants } from "../constants";

export const CountryContext = createContext<CountryContextType>({
    countryList: [],
    regionList: [],
    isLoading: false,
    sortCountries: () => { },
    filterByRegion: () => { },
    filterByStatus: () => { },
    searchCountries: () => { },
});

let listOfCountries: any = [];
let listOfRegions: any = ["Americas", "Antarctic", "Africa", "Asia", "Europe", "Oceania"];

const CountryProvider = ({ children }: Children) => {
    const [countryList, setCountryList] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [regionList, setRegionList] = useState([]);

    const fetchCountries = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://countryinfoapi.com/api/countries');
            listOfCountries = await response.json();
            setCountryList(listOfCountries);
        } catch (error) {
            console.error(error);
        } finally {
            setRegionList(listOfRegions);
            setIsLoading(false);
        }
    };

    const sortCountries = (value: number) => {
        switch (value) {
            case Constants.SORTBY.POPULATION:
                const sortByPopulationList = [...listOfCountries].sort((a, b) => a.population - b.population).reverse()
                setCountryList(sortByPopulationList);
                break;
            case Constants.SORTBY.NAME:
                const sortByNameList = [...listOfCountries].sort((a, b) => { return (a.name > b.name ? 1 : (a.name === b.name ? 0 : -1)) })
                setCountryList(sortByNameList);
                break;
            case Constants.SORTBY.AREA:
                const sortByAreaList = [...listOfCountries].sort((a, b) => a.area - b.area).reverse()
                setCountryList(sortByAreaList);
                break;

        }
    }

    const filterByRegion = (selectedRegions: string) => {
        const countriesByRegion = [...listOfCountries].filter((country) => selectedRegions.includes(country.region));
        setCountryList(countriesByRegion);
    }

    const filterByStatus = (statuses: string[]) => {
        if (statuses.length > 0) {
            const countriesByStatus = [...listOfCountries].filter((country) => {
                if (statuses.includes(Constants.CHECKBOX.UN) && country.unMember) return true;
                if (statuses.includes(Constants.CHECKBOX.INDE) && !country.unMember) return true;
                return false;
            });
            setCountryList(countriesByStatus);
        } else {
            setCountryList(listOfCountries);
        }
    }

    const searchCountries = (searchQuery: string) => {
        const searchResult = [...listOfCountries].filter((country) => {
            return (country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                country.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                country.subregion.toLowerCase().includes(searchQuery.toLowerCase()))
        })
        setCountryList(searchResult);
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    return <CountryContext.Provider value={{ countryList, isLoading, regionList, sortCountries, filterByRegion, filterByStatus, searchCountries }}>
        {children}
    </CountryContext.Provider>
}
export default CountryProvider;
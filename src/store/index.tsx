import { createContext, useEffect, useState } from "react";
import { Country, Children } from "../models";

interface CountryContextType {
    countryList: Country[];
    isLoading: boolean;
    fetchCountries: () => void;
}

export const CountryContext = createContext<CountryContextType>({
    countryList: [],
    isLoading: false,
    fetchCountries: () => { },
});

const CountryProvider = ({ children }: Children) => {
    const [countryList, setCountryList] = useState<Country[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchCountries = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://countryinfoapi.com/api/countries');
            const data = await response.json();
            setCountryList(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    return <CountryContext.Provider value={{ countryList, isLoading, fetchCountries }}>
        {children}
    </CountryContext.Provider>
}
export default CountryProvider;
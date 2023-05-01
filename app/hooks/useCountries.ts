import { kazakhstanRegions } from "../kazakhstanRegions";

const useCountries = () => {
  const getAll = () => kazakhstanRegions;

  const getCountryByValue = (value: string) => {
    return kazakhstanRegions.find((item) => item.value === value);
  };

  return {
    getAll,
    getCountryByValue,
  };
};

export default useCountries;

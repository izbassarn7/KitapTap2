
import { almatyDistricts } from "../kazakhstan-districts";

const useAlmatyDistricts = () => {
  const getAll = () => almatyDistricts;

  const getDistrictByValue = (value: string) => {
    return almatyDistricts.find((item) => item.value === value);
  };

  return {
    getAll,
    getDistrictByValue,
  };
};

export default useAlmatyDistricts;

import { create } from 'zustand';

interface CountryStore {
    country: Country[];
    setCountry: (newCountry: Country[]) => void;
}

const useCountryStore = create<CountryStore>((set) => ({
    country: [],
    setCountry: (newCountry: Country[]) => set({ country: newCountry }),
}));

export default useCountryStore;

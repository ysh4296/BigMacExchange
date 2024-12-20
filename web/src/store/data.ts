import { create } from 'zustand';

interface DataStore {
    data: BigMacData[];
    setData: (newData: BigMacData[]) => void;
}

const useDataStore = create<DataStore>((set) => ({
    data: [],
    setData: (newData) => set({ data: newData }),
}));

export default useDataStore;
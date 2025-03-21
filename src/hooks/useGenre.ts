import useData from "./useData";

interface Genre {
    id: number;
    name: string;
}

const useGere = () => useData<Genre>("/genres");

export default useGere;
import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGere = () => useData<Genre>("/genres");

export default useGere;
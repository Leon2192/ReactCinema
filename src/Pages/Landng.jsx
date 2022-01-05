import MoviesGrid from "../Components/MoviesGrid/MoviesGrid";
import { Search } from "../Components/Search/Search";
import { useDebounce } from "../Services/useDebounce";
import { useQuery } from "../Services/useQuery";

const Landing= () => { 
    const query = useQuery();
    const search = query.get("search");
    const debouncedSearch = useDebounce(search, 300);

    return (
    <div>
       <Search/>
       <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
    )
}

export default Landing;
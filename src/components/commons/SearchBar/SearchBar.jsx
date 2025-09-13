import { useState } from "react"
import "./SearchBar.css"

function SearchBar() {
    const [query, setQuery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSearch) onSearch(query)
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button  type="submit"> <img src="/img/search.svg" className="search-icon"/> </button>
        </form>
    )
}

export default SearchBar
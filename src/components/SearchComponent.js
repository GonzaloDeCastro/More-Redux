import React, { useState } from "react";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(event) {
    event.preventDefault();
    // Aquí podría ir código para procesar la búsqueda y actualizar los resultados
    setSearchResults(/* resultados de la búsqueda */);
  }

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </form>
  );
}

export default SearchComponent;

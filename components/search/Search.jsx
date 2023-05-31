import React, { useState } from 'react';
import styles from './search.module.css';

const Search = ({setProduct}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = () => {
    fetchSuggestions(searchTerm);
  };

  const fetchSuggestions = async (searchTerm) => {
    try {
      const response = await fetch(`/api/v1/products/search?searchTerm=${searchTerm}`, {
        method: "POST"
      });

      const data = await response.json();
      console.log(data.data[0]);
      setSuggestions(data.data);
    } catch (error) {
      console.error('Error fetching product suggestions:', error);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const newTypingTimeout = setTimeout(() => {
      fetchSuggestions(value);
    }, 1000);

    setTypingTimeout(newTypingTimeout);
  };

  const handleItemClick = (product) => {
    setProduct(product);
    setSuggestions([])
  }

  return (
    <div className={styles.container} >
      <div className={styles.searchBox} >
        <input type="text" value={searchTerm} onChange={handleChange} placeholder='Search Here' />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {suggestions.length > 0 ? (
        <ul className={styles.itemWrapper} >
          {suggestions.map((product) => (
            <li key={product.product_id} onClick={() => handleItemClick(product)} >
                <img className={styles.resultImage} src={product.listOfImages[0]} />
                &nbsp;&nbsp;&nbsp;
                <p className={styles.resutsCaption} >{product.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Search;
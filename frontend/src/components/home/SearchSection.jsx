function SearchSection() {
    return (
        <section className="search-section">

            <div className="search-container">

                <h2>Search Your Perfect Property</h2>

                <p>
                    Find residential, commercial, rental and investment properties with ease.
                </p>

                <div className="search-box">

                    <input
                        type="text"
                        placeholder="📍 Enter Location"
                    />

                    <select>
                        <option>Buy</option>
                        <option>Rent</option>
                    </select>

                    <select>
                        <option>All Types</option>
                        <option>Apartment</option>
                        <option>Villa</option>
                        <option>House</option>
                        <option>Commercial</option>
                        <option>Land</option>
                    </select>

                    <button>
                        Search
                    </button>

                </div>

            </div>

        </section>
    );
}

export default SearchSection;
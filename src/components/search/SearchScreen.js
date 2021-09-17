import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heores/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [values, handleInputChange, reset] = useForm({ searchField: '' });

  const { searchField } = values;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchField}`);
  }
  
  return (
    <>
      <div className="row mt-4">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchField"
              value={values.searchField}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Results </h4>
          <hr />
          
          {
            (q === '')
              &&
              <div className="alert alert-info">
                Search a hero
              </div>
          }

          {
            (q !== '' && heroesFiltered.length === 0)
              &&
              <div className="alert alert-info">
                There is not a hero with { q }
              </div>
          }

          {
            heroesFiltered && 
            heroesFiltered.map(hero => (
              <HeroCard
                key={hero.id}
                { ...hero }
              />
            ))
          }

        </div>

      </div>
    </>
  )
}

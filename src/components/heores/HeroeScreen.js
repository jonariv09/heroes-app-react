import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroeScreen = ({ history }) => {

  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  if(!hero)
    return <Redirect to="/"/>

  const handleReturn = () => {
    // if(hero.publisher === "DC Comics")
    //   history.replace('/dc');
    // else
    //   history.replace('/marvel');

    if(history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3> { superhero } </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
          <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
          <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
        </ul>

        <h5> Characters </h5>
        <p> { characters } </p>

        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          Return
        </button>

      </div>
    </div>
  )
}

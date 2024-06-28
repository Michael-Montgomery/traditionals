import { useState } from 'react';
import Header from '../../components/header/header';
import drinks from '../../data/drinks';
import './brews.css';



function Brews() {
const [drinksCopy, setDrinksCopy] = useState(drinks);
const [naChecked, setNaChecked] = useState(false);
    return (
        <>
            <div id='brews-wrapper'>
                <Header></Header>
                <div id='filters-wrapper'>
                    <form>
                        <ul id='drinks-filters-list'>
                            <button>All</button>
                            <button>Wine</button>
                            <button>Beers & IPA's</button>
                        </ul>
                        <p><input type='checkbox' onClick={(e) => {
                                setNaChecked(e.target.checked);
                                if(e.target.checked) {
                                    setDrinksCopy(drinksCopy.filter((val) => !val.containsAlcohol))
                                } else {
                                    setDrinksCopy(drinks)
                                }
                        }}></input>Non-Alcoholic</p>
                        <select onChange={(e) => setDrinksCopy(drinksCopy.filter((val) => val.type === e.target.value))}>
                            <option value='beer'>beer</option>
                            <option value='lager'>lager</option>
                            <option value='ipa'>IPA</option>
                        </select>
                        <p>{drinksCopy.length}</p>
                    </form>
                </div>
                {/* <h3>Beer, Lagers & IPA's</h3> */}
                <ul id='beer-list'>
                    {
                        drinksCopy.filter((val) => {return val.type !== 'wine'}).map((drink, idx) => {
                            return (
                                <li key={idx}>
                                    <div className='beer-list-div'>
                                        <p className='beer-name'>{drink.name}</p>

                                        {
                                            !drink.containsAlcohol ? <p className='na-pill'>Non-Alcoholic</p> : <p className='abv-pill'>{`${drink.abv}% ABV`}</p>
                                        }
                                        {
                                            drink.draft ? <p className='tag-pill'>Draft</p> : <></>
                                        }
                                        {
                                            drink.bottle ? <p className='tag-pill'>Bottle</p> : <></>
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


        </>
    )
}

export default Brews;
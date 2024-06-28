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
                            if (e.target.checked) {
                                setDrinksCopy(drinksCopy.filter((val) => !val.containsAlcohol))
                            } else {
                                setDrinksCopy(drinks)
                            }
                        }}></input>Non-Alcoholic</p>
                        <select onChange={(e) => {
                            if (e.target.value === 'all') {
                                if (naChecked) {
                                    setDrinksCopy(drinksCopy.filter((val) => !val.containsAlcohol))
                                } else {
                                    setDrinksCopy(drinks)
                                }
                            } else {
                                if (naChecked) {
                                    setDrinksCopy(drinksCopy.filter((val) => val.type === e.target.value && (!val.containsAlcohol)));
                                } else {
                                    setDrinksCopy(drinksCopy.filter((val) => val.type === e.target.value));
                                }
                            }
                        }}>
                            <option value='all'>All Drinks</option>
                            <option value='beer'>beer</option>
                            <option value='lager'>lager</option>
                            <option value='ipa'>IPA</option>
                            <option value='wine'>Wine</option>
                        </select>
                        {/* <div id='item-count'>{drinksCopy.length}</div> */}
                        <select>
                            <option>{`Sort ${drinksCopy.length} drinks`}</option>
                            <option value='name'>Name</option>
                            <option value='abv-low'>ABV (low - high)</option>
                            <option value='abv-high'>ABV (high - low)</option>
                        </select>
                    </form>
                </div>
                {/* <h3>Beer, Lagers & IPA's</h3> */}
                <ul id='beer-list'>
                    {
                        drinksCopy.map((drink, idx) => {
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
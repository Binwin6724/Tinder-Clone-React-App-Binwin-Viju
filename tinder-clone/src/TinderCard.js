import  React,{ useEffect, useState } from 'react'
import TinderCardz from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'

function TinderCard() {


    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')

            setPeople(req.data);
        }

        fetchData();
    }, [])


    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }



    return (
        <div className = 'tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCardz 
                        className='swipe'
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}

                        >
                            <div 
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className='card'>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCardz>
                ))}
            </div>

            
        </div>
    )
}

export default TinderCard

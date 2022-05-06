import React from 'react'

export const High = ({ name, relation, rating, ratingColor, pronoun }) => (
    <p className="card-text mt-2">With a risk factor rating of <span className={`text-${ratingColor}`}>{rating}</span>, there is a high risk potential of your {relation} {name} becoming involved with a gang. Steps that you could take to lower this risk include, getting more involved in {name}'s life, if possible. Learn more about who {pronoun[2]} friends are, who {pronoun[3]} hanging out with and where {pronoun[3]} hanging out at. If there are family, friends, and/or neighbors in {name}'s life that are currently involved or have been involved in the past with a gang, have discussions with them on how they may be influencing {pronoun[1]} and whether or not they could focus more on being a positive influence in {pronoun[2]} life. After school activities such as sports could keep {name} occupied and away from negative influences. Know {name}'s route to and from school as well as other places {pronoun[0]} may frequent. If {pronoun[0]} passes though areas of the city that are controlled by gangs, consider finding some form of transportation or have {pronoun[1]} take a different route. If the city {name} lives in has a high risk rate, if at all possible consider having {pronoun[1]} relocated to a city with a lesser risk rate. 
    </p>
)

export const Moderate = ({ name, relation, rating, ratingColor, pronoun }) => (
    <p className="card-text mt-2">{name} your {relation}, has a moderate risk factor rating of <span className={`text-${ratingColor}`}>{rating}</span>. This means that risk potential of {pronoun[1]} becoming involved with a gang is somewhat possible. There are some measures that you can take to lower and possibly eliminate some of the risks that {name} may encounter. Steps that you could take to lower this risk include, getting more involved in {name}'s life, if possible. Learn more about who {pronoun[2]} friends are, who {pronoun[3]} hanging out with and where {pronoun[3]} hanging out at. If there are family, friends, and/or neighbors in {name}'s life that are currently involved or have been involved in the past with a gang, have discussions with them on how they may be influencing {pronoun[1]} and whether or not they could focus more on being a positive influence in {pronoun[2]} life. After school activities such as sports could keep {name} occupied and away from negative influences. Know {name}'s route to and from school as well as other places {pronoun[0]} may frequent. If {pronoun[0]} passes though areas of the city that are controlled by gangs, consider finding some form of transportation or have {pronoun[1]} take a different route. If the city {name} lives in has a high risk rate, if at all possible consider having {pronoun[1]} relocated to a city with a lesser risk rate. 
    </p>
)

export const Low = ({ name, relation, rating, ratingColor, pronoun }) => (
    <p className="card-text mt-2">Your {relation} {name} has a low risk factor rating of <span className={`text-${ratingColor}`}>{rating}</span>. That chance of {pronoun[1]} becoming involved with a gang at this moment is slim to none. One of the main steps that you can consider to keep it low would be to continue to stay invlovled in {name}'s life. Learn what the risks are and how to recognize them in order to avoid them if they happen to become apparent in {name}'s life. 
    </p>
)

const Risk = {
    High,
    Moderate,
    Low
}

export default Risk


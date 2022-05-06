import React, { Component } from 'react';
import ChildUpdate from '../ChildUpdate'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Risk from '../../components/Risk'
// ChildCard component uses props to display child info and ternary to color the rating text and display correct risk text
class ChildCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updated: false
        }
    }
    // use to display old rating to user
    componentDidUpdate(oldProps) {
        if (oldProps.rating !== this.props.rating) {
            this.setState({
                updated: true,
                oldRating: oldProps.rating
            })
        }
    }

    render() {
        const { name, age, gender, race, city, rating } = this.props
        const { oldRating } = this.state
        let pronoun = gender === 'Male' ? ["he", "him", "his", "he's"] : gender === 'Female' ? ["she", "her", "her", "she's"] : ["they", "them", "their", "they're"]
        let ratingColor = rating > 6.66 ? 'danger' : rating > 3.33 ? 'warning' : 'success'
        let cityRatingColor = city.rating > .3 ? 'danger' : city.rating > .1 ? 'warning' : 'success'
        let cityRate = city.rating > .3 ? 'High' : city.rating > .1 ? 'Moderate' : 'Low'
        let oldRatingColor = oldRating > 6.66 ? 'danger' : oldRating > 3.33 ? 'warning' : 'success'
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Name: {name}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Gender: {gender}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">Race: {race}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">City: {city.name} - Rate: <span className={`badge bg-${cityRatingColor}`}>{cityRate}-{city.rating} </span></h6>
                    <h6 className="card-subtitle mb-2 text-muted">Rating: <span className={`text-${ratingColor}`}>{rating}</span></h6>
                    {
                        this.state.updated ?
                            <h6 className="card-subtitle mb-2 text-muted">Rating before update: <span className={`text-${oldRatingColor}`}>{oldRating}</span></h6>
                            :
                            null
                    }
                    <ProgressBar now={rating * 10} variant={ratingColor} />
                    {/* use rating to display correct suppression advice */}
                    {
                        rating > 6.66 ?
                            <Risk.High
                                {...this.props}
                                ratingColor={ratingColor}
                                cityRatingColor={cityRatingColor}
                                pronoun={pronoun}
                            />
                            :
                            rating > 3.33 ?
                                <Risk.Moderate
                                    {...this.props}
                                    ratingColor={ratingColor}
                                    cityRatingColor={cityRatingColor}
                                    pronoun={pronoun}
                                />
                                :
                                <Risk.Low
                                    {...this.props}
                                    ratingColor={ratingColor}
                                    cityRatingColor={cityRatingColor}
                                    pronoun={pronoun}
                                />
                    }
                    <ChildUpdate {...this.props} />
                </div>
            </div>
        )
    }
}

export default ChildCard;
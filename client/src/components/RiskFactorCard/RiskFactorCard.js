import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
// RiskFactorCard displays ProgressBar and risk factor legend
const RiskFactorCard = () => {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <h5 className="card-title mt-2">Risk Factor Rating Breakdown</h5>
                <ProgressBar className="mb-2">
                    <ProgressBar variant="success" now={33.33} label="Low-Risk 0-3" key={1} />
                    <ProgressBar variant="warning" now={33.33} label="Moderate-Risk 4-6" key={2} />
                    <ProgressBar variant="danger" now={33.33} label="High-Risk 7-10" key={3} />
                </ProgressBar>
                <p className="card-text m-0">0-3 = There is little to no risk of this child becoming involved with a gang.</p>
                <p className="card-text m-0">4-6 = There is a significant risk of this child becoming involved with a gang.</p>
                <p className="card-text m-0">7-10 = There is a definite risk of this child becoming involved with a gang.</p>
                <small className="card-text text-muted">
                    Please note: These risk factors are not an actual indication that this child will or will not become involved with a gang. This program's purpose is to assist you with assessing if there is any risk and to offer advice on what steps you can take in order to suppress that risk. A large amount of children manage to steer clear of gangs despite a high risk, as well as a few that have become involved with gangs with little to no risk at all.
                </small>
            </div>
        </div>
    )
}

export default RiskFactorCard
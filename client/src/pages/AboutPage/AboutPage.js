import React from 'react'
// Use grid to display photo and blurb of four contributors to app
const AboutPage = () =>
    <div className="text-light text-center container py-5" id="bg-about">
        <h3>About Us</h3>
        <div className="row rounded mb-4 py-2">
            <div className="col-sm-4">
                <img className="img-fluid rounded" src="images/robert.jpeg" alt="Photo of Robert" />
            </div>
            <div className="col-sm-8">
                <h4>Robert</h4>
                <p className="text-sm-start">
                    Drawn to the gang lifestyle at a young age and having served over 20 
                    years in prison, Robert knows first-hand the many reasons why a child
                    would want to join a gang and the life and/or death consequences that follow 
                    those that become involved with one. From south L.A., Robert is familiar 
                    with the high-risk areas of the various cities in the county.  
                </p>
            </div>
        </div>
        <div className="row rounded mb-4 py-2">
            <div className="col-sm-8">
                <h4>Stevie</h4>
                <p className="text-sm-end">
                    Stevie recently had his life sentence revoked and was released from prison after
                    serving more then 23 years. Now an ex-gang member, having grown up around gangs in
                    Long Beach and living amongst them throughout his incarceration, Stevie is well
                    aware of the risks that children face growing up in today's inner cities.
                </p>
            </div>
            <div className="col-sm-4">
                <img className="img-fluid rounded" src="images/stevie.jpeg" alt="Photo of Stevie" />
            </div>
        </div>
        <div className="row rounded mb-4 py-2">
            <div className="col-sm-4">
                <img className="img-fluid rounded" src="images/paolo.jpeg" alt="Photo of Paolo" />
            </div>
            <div className="col-sm-8">
                <h4>Paolo</h4>
                <p className="text-sm-start">
                    Having served in the military, Paolo brings a unique perspective when it comes to
                    helping at-risk youth. A nine year stint in prison has opened his eyes, not only 
                    to the direct correlation between California's high prison population and the gang
                    problem of the state's inner cities, but also to the policies that are in place that
                    are conductive to them.    
                </p>
            </div>
        </div>
        <div className="row rounded mb-4 py-2">
            <div className="col-sm-8">
                <h4>Erskine</h4>
                <p className="text-sm-end">
                    From Northern California, Erskine paroled in 2020 after serving 12 years in prison.
                    He now works to help at-risk youth steer clear from the path that he had taken.
                    As a former gang leader, he offers incedible insight as to why kids would choose
                    to get involved with a gang.
                </p>
            </div>
            <div className="col-sm-4">
                <img className="img-fluid rounded" src="images/erskine.jpeg" alt="Photo of Erskine" />
            </div>
        </div>


    </div>

export default AboutPage
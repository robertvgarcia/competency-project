import React from 'react'
import { Link } from 'react-router-dom'
// displays info about gang and prison problems
const LearnPage = () =>
    <div className="text-light text-center container py-5" id="bg-home">
        <div className="p-4 mb-3">
            <h4>A Dead End</h4>
            <img src="images/arrest.png" className="img-fluid mx-3 rounded float-end" alt="Gang member in handcuffs"></img>
            <p className="mx-auto text-start">
                There are many reasons why one would become involved with a gang. A sense of belonging, to earn respect, or drawn to the lifestyle having grown up around gangs.
                Being involved with a gang may eventually lead to a life in prison or possibly an early death. Over half of those individuals that become involved with a gang have either ended up in prison for a lengthy amount of time or murdered at an early age. A few do make it out and go on to live long productive lives. Reaching levels of over 95% in some of the states's higher security prison yards, the majority of California's prison population consists of those that were involved with a gang at some point in their lives. 
            </p>
        </div>
        <div className="p-4 mb-3">
            <h4>Los Angeles County's Gang Problem</h4>
            <img src="images/LA_County.png" className="img-fluid px-3 rounded float-start" alt="Image of LA county"></img>
            <p className="mx-auto text-start">
                According to the Los Angeles Police Department, the city is home to 45,000 gang members, organized into 450 gangs. Among them are the Crips and Bloods, which are both African American street gangs that originated in the South Los Angeles region. Latino street gangs such as the Sureños, a Mexican American street gang, and Mara Salvatrucha, which has mainly members of Salvadoran descent, all originated in Los Angeles. This has led to the city being referred to as the "Gang Capital of America".
                The surrounding cities within Los Angeles county consists of over 1000 gangs comprising over 100,000 gang members. This problem that the county faces is in direct relation to the state's prison problem.
            </p>
            <small>Source: <a href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/Los_Angeles.html" className="text-warning">wikipedia/Los_Angeles</a></small>
        </div>
        <div className="p-4 mb-3">
            <h4>California's Prison Problem</h4>
            <img src="images/Prison_crowded.jpg" className="img-fluid px-3 rounded float-end" alt="Photo of overcrowded CA prison"></img>
            <p className="mx-auto text-start">
                Many prisons in the United States are overcrowded. For example, California's 33 prisons have a total capacity of 100,000, but they hold 170,000 inmates. Many prisons in California and around the country are forced to turn old gymnasiums and classrooms into huge bunkhouses for inmates. They do this by placing hundreds of bunk beds next to one another, in these gyms, without any type of barriers to keep inmates separated. In California, the inadequate security engendered by this situation, coupled with insufficient staffing levels, have led to increased violence and a prison health system that causes one death a week. This situation has led the courts to order California to release 27% of the current prison population, citing the Eighth Amendment's prohibition of cruel and unusual punishment. The three-judge court considering requests by the Plata v. Schwarzenegger and Coleman v. Schwarzenegger courts found California's prisons have become criminogenic as a result of prison overcrowding.
                According to a Supreme Court ruling issued on May 23, 2011, California — which has the highest overcrowding rate of any prison system in the country — must alleviate overcrowding in the state's prisons, reducing the prisoner population by 30,000 over the next two years.
            </p>
            <small>Source: <a href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/Incarceration_in_the_United_States.html" className="text-warning">wikipedia/US_incarceration</a></small>
        </div>
        <div className="p-4 mb-3">
            <h4>Incarceration In The United States</h4>
            <img src="images/U.S._incarceration_rates.png" className="img-fluid px-3 rounded float-start" alt="Graph of US incarceration rates"></img>
            <p className="mx-auto text-start">
                Incarceration in the United States is one of the main forms of punishment, rehabilitation, or both for the commission of felony and other offenses. The United States has the largest prison population in the world, and the second-highest per-capita incarceration rate, behind Seychelles (which in 2014 had a total prison population of 735 out of a population of around 92,000). In 2013 in the US, there were 698 people incarcerated per 100,000 population. This is the U.S. incarceration rate for adults or people tried as adults.
                According to the US Bureau of Justice Statistics (BJS), 2,220,300 adults were incarcerated in US federal and state prisons, and county jails in 2013 – about 0.91% of adults (1 in 110) in the U.S. resident population. Additionally, 4,751,400 adults in 2013 (1 in 51) were on probation or on parole. In total, 6,899,000 adults were under correctional supervision (probation, parole, jail, or prison) in 2013 – about 2.8% of adults (1 in 35) in the U.S. resident population. In 2014, the total number of persons in the adult correctional systems had fallen to 6,851,000 persons, approximately 52,200 fewer offenders than at the year end of 2013 as reported by the BJS. About 1 in 36 adults (or 2.8% of adults in the US) was under some form of correctional supervision – the lowest rate since 1996. On average the correctional population has declined by 1.0% since 2007; while this continued to stay true in 2014 the number of incarcerated adults slightly increased in 2014.
                In addition, there were 54,148 juveniles in juvenile detention in 2013.
            </p>
            <small>Source: <a href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/Incarceration_in_the_United_States.html" className="text-warning">wikipedia/US_incarceration</a></small>
        </div>
        <div className="p-4 mb-3">
            <h4>Crime Does Pay</h4>
            <img src="images/CoreCivic.png" className="img-fluid px-3 rounded float-end" alt="Image of CoreCivic logo/info"></img>
            <p className="mx-auto text-start">
                Sociologist John L. Campbell of Dartmouth College claims that private prisons in the U.S. have become "a lucrative business." Between 1990 and 2000, the number of private facilities grew from five to 100, operated by nearly 20 private firms. Over the same time period the stock price of the industry leader, Corrections Corporation of America (CCA), climbed from $8 a share to $30. According to journalist Matt Taibbi, major investors in the prison industry include Wells Fargo, Bank of America, Fidelity Investments, General Electric and The Vanguard Group. The aforementioned Bloomberg report also notes that in the past decade the number of inmates in for-profit prisons throughout the U.S. rose 44 percent.
                Controversy has surrounded the privatization of prisons with the exposure of the genesis of the landmark Arizona SB 1070 law. This law was written by Arizona State Congressman Russell Pearce and the CCA at a meeting of the American Legislative Exchange Council (ALEC) in the Grand Hyatt in Washington, D.C. Both CCA and GEO Group, the two largest operators of private facilities, have been contributors to ALEC, which lobbies for policies that would increase incarceration, such as three-strike laws and "truth-in-sentencing" legislation. In face, in the early 1990s, when CCA was co-chair of ALEC, it co-sponsored (with the National Rifle Association) the so-called "truth-in-sentencing" and "three-strikes-you're-out" laws. Truth-in-sentencing called for all violent offenders to serve 85 percent of their sentences before being eligible for release; three strikes called for mandatory life imprisonment for a third felony conviction. Some prison officers unions in publicly run facilities such as California Correctional Peace Officers Association have, in the past, also supported measures such as three-strike laws. Such laws increased the prison population.
            </p>
            <small>Source: <a href="https://wikipedia.tlm.cloud/wikipedia_en_computer_2017-04/A/CoreCivic.html" className="text-warning">wikipedia/CoreCivic</a></small>
        </div>
        <Link to='/users/create'>
            <button className="btn btn-outline-warning">Create Assessment</button>
        </Link>
    </div >

export default LearnPage



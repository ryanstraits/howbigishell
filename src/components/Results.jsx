import React from "react"

class Results extends React.Component {

  constructor (props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset () {
    this.props.handleReset();
  }

  render () {

    if (this.props.calc === null) {
      return null;
    }

    var calc = this.props.calc;

    return (
      <React.Fragment>
        <div id="result">
          <div className="row">
              <div className="col-md-6 col-md-push-3">
                  <div className="quiz-box results">
                      <div className="row">
                          <div className="col-md-10 col-md-push-1">
                              <div className="text-center">
                                  <h3>Based on your beliefs,</h3>
                                  <h2>{ calc.populationOfHell().toLocaleString(navigator.language, { minimumFractionDigits: 0 }) }</h2>
                                  <p>is the current population of your hell.</p>
                                  <p>
                                    That’s <strong>{ calc.populationPercentage() }%</strong> of all humans who’ve ever lived and <strong>{ calc.currentPopulationMultiplier() } times</strong> the current population of Earth.
                                    <div>
                                      {Array(calc.earths()).fill(1).map((el, i) =>
                                        <img key={i} width="79" alt='globe' className='globe' src='images/2-with-results-and-about-nounearth1585344-3@2x.png'></img>
                                      )}
                                    </div>
                                  </p>
                                  <p>It would take <strong>{ calc.earths() } Earths</strong> to hold this population.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="text-center" onClick={this.handleReset}><div className="pill" id="retake"><h3>Retake quiz</h3></div></div>
              </div>
          </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Results

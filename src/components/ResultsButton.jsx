import React from "react"

class ResultsButton extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onResultsSubmit();
  }

  render () {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <div className="pill purple" id="calculate" onClick={this.handleClick}>
                <h3>See Results</h3>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultsButton
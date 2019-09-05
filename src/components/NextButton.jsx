import React from "react"

class NextButton extends React.Component {

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return window.scroll_to(this.props.nextId);
  }

  render () {

    if (this.props.hidden === true) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <div className="pill next-arrow" onClick={this.handleClick}>
                <img alt='down arrow' className="path" width="40" src="images/2-with-results-and-about-path-2@2x.png"></img>
                <br />
                <img alt='down arrow' className="path" width="40" src="images/2-with-results-and-about-path-2@2x.png"></img>
                <br />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NextButton

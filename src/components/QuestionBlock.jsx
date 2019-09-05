import React from "react"

class QuestionBlock extends React.Component {

  constructor (props) {
    console.log(props);
    super(props);
    this.state = { hidden: props.hidden } ;
  }

  render () {
    if (this.state.hidden === true) {
      return null
    }

    return (
      <React.Fragment>
          <div className='row' id={this.props.id}>
            <div className="col-md-6 col-md-push-3">
              <div className="quiz-box">
                <div className="row">
                  <div className="col-md-10 col-md-push-1">
                    <h1 className="text-center">{this.props.title}</h1>
                    <h3>Check the boxes of the groups you think are going to heaven. Leave the rest blank.</h3>

                    {Object.keys(this.props.options).map((value, index) => {
                      return <label className="checkbox-container" key={index}>{value}
                              <input type="checkbox" name={this.props.group + "[]"} value={value}></input>
                              <span className="checkmark"></span>
                            </label>
                    })}

                  </div>
                </div>
              </div>
            </div>
          </div>

      </React.Fragment>
    );
  }
}

export default QuestionBlock

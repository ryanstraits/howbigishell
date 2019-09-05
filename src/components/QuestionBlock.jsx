import React from "react"
import $ from 'jquery'

class QuestionBlock extends React.Component {

  constructor (props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck (e) {
    var el = $(e.target)

    if (el.hasClass('none-of-these')) {  // "None of these"? Clear all checkboxes
      el.closest('.quiz-box').find('input').prop("checked", false)
      el.prop("checked", true)
    } else if (el.hasClass('protestant')) {
      this.props.handleProtestants();
    } else { // Clear "None of these"
      el.closest('.quiz-box').find('input.none-of-these').prop("checked", false)
    }
  }

  render () {
    if (this.props.hidden === true) {
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
                              <input type="checkbox" className={value.replace(/\s+/g, '-').toLowerCase()} name={this.props.group + "[]"} value={value} onClick={this.handleCheck}></input>
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

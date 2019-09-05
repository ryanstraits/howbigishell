import React from "react"
import $ from 'jquery'

import Calculator from '../js/calculate.es6.js'

import NextButton from './NextButton'
import QuestionBlock from "./QuestionBlock"
import Results from "./Results"
import ResultsButton from "./ResultsButton"
import * as constants from '../js/constants'

class Form extends React.Component {

  constructor (props) {
    super(props);
    this.state = { calc: null, hideDenoms: true }
    this.onResultsSubmit = this.onResultsSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleProtestants = this.handleProtestants.bind(this);
  }

  handleReset () {
    $('#quiz').trigger('reset')
    $('#question-second').addClass('hide')
    window.scroll_to('#question-first')
    this.setState({
      hideDenoms: true,
      calc: null
    })
  }

  handleProtestants () {
    this.setState({ hideDenoms: false })
  }

  onResultsSubmit () {
    var blocks_array = []
    var denoms_array = []
    $("#question-first input:checked").each(function() {
      return blocks_array.push($(this).val());
    });
    $("#question-second input:checked").each(function() {
      return denoms_array.push($(this).val());
    });

    var calc = new Calculator(blocks_array, denoms_array)

    this.setState((state, props) => ({
      calc: calc
    }));

    window.scroll_to('#result');
  }

  render () {
    return (
      <React.Fragment>
        <form id='quiz'>
          <NextButton nextId="#question-first" />
          <QuestionBlock id='question-first' title='Christian Mega-blocs' options={constants.major_blocks} group='blocks' handleProtestants={this.handleProtestants} />
          <NextButton nextId="#question-second" hidden={this.state.hideDenoms} />
          <QuestionBlock id='question-second' title='Protestant Denominations' options={constants.major_denoms} hidden={this.state.hideDenoms} />
          <ResultsButton onResultsSubmit={this.onResultsSubmit} />
          <Results calc={this.state.calc} handleReset={this.handleReset}/>
        </form>
      </React.Fragment>
    );
  }
}

export default Form

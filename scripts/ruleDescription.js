class RuleDescription extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {goalsValue: this.props.goalsValue}
  }

  handleChange(e){
    this.setState({ goalsValue: e.target.value });
    this.props.changeGoalsValue(e.target.value);
  }

  render(){
    return(
      <div className="rule-description-box">
        <div className="description-text">{this.props.text}</div>
        <br/>
        <span>Value: <input 
                        type="number" 
                        min={this.props.min} 
                        max={this.props.max} 
                        value={this.state.goalsValue} 
                        onChange={this.handleChange.bind(this)} />
        </span>
      </div>
    )
  }
}  
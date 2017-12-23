
class Concordia extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      goalsValue: 0,
      cardsCount: 1,
    }
  };  

  changeGoalsValue(goalsValue){
    this.setState({
      goalsValue: goalsValue,
    });
  }

  changeCardsCount(cardsCount){
    this.setState({
      cardsCount: cardsCount,
    });
  }

  render(){
    return (
      <div className="card">
        <div className="">

          { /* Page title */ }
          <PageTitle pageTitle="Vesta" />

          { /* Top horizontal swirl */ }
          <img className="horizontal-swirl" src="./content/swirl1.jpg" />
          
          { /* Rule description text and input */ }
          <RuleDescription 
            text="If you caluclate value of all goods in your store and add them to your remaining cash value, what is the sum total?" 
            goalsValue={this.state.goalsValue} 
            changeGoalsValue={this.changeGoalsValue.bind(this)} />        
          
          { /* Number of cards input*/ }
          <CardCount
          cardsCount={this.state.cardsCount} 
          changeCardsCount={this.changeCardsCount.bind(this)} />

          { /* Points awarded display */ }
          <div>
            <h3>Points Awarded</h3>
            <p> {Math.floor(this.state.goalsValue / 10) * this.state.cardsCount} </p> 
          </div>  

          { /* Top horizontal swirl */ }
          <img className="horizontal-swirl" src="./content/swirl1.jpg" />
        </div>
      </div>)
  }
}

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="page-title">
        <h3>{this.props.pageTitle}</h3>
      </div>)
  }
};

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
        <span>Value: <input type="text" value={this.state.goalsValue} onChange={this.handleChange.bind(this)} /></span>
      </div>
    )
  }
}  

class CardCount extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {cardsCount: this.props.cardsCount}
  }

  handleChange(e){
    this.setState({cardsCount: e.target.value});
    this.props.changeCardsCount(e.target.value);
  }

  render(){
    return(
      <div>
        <h3>How many cards?</h3>
        Cards: <input type="text" value={this.state.cardsCount} onChange={this.handleChange.bind(this)} />
      </div>   
    )
  }
}  

ReactDOM.render(<Concordia />, document.getElementById('app'));


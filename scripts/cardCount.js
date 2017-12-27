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
        Cards: <input 
                  type="number" 
                  min={this.props.min} 
                  max={this.props.max} 
                  value={this.state.cardsCount} 
                  onChange={this.handleChange.bind(this)} />
      </div>   
    )
  }
}  

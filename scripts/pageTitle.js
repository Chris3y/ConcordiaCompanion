class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
  	return(
	    <div className="page-title">
	      <h1>{props.page-title}</h1>
	    </div>  
  	)
  }


};
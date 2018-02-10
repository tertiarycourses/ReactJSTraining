class MyChildComp extends React.Component { 
  render() { 
    return ( 
      <div> 
        <h2>My Child Title</h2>
        <p>{this.props.parentDay}></p>
        <hr>
        {this.props.children}
      </div>
    ); 
  } 
}
export default MyChildComp;
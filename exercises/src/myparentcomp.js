import MyChildComp from './mychildcomp';
class MyParentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {day: this.props.weekday};
  }
  render() { 
    return ( 
      <div> 
        <h1>My Parent Title</h1>
        <MyChildComp parentDay={this.state.day}></MyChildComp>
      </div> 
    ); 
  } 
}
ReactDOM.render( 
  <MyParent weekday="Friday"/>, 
  document.getElementById('app') 
);
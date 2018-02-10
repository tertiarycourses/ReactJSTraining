class ExpandBox extends React.Component {

	constructor(props) {
    super(props);
    
    this.state = { 
      data: "Lorem Ipsum Show or Hide Box Content",
      buttonLabel: " + Show Box Content",
      boxExpanded: false
    };
    
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox(event) {
      event.preventDefault();
      var btnLabel = (this.state.boxExpanded) ? " + Show Box Content" : " - Hide Box Content";

      this.setState({
          boxExpanded: !this.state.boxExpanded,
          buttonLabel: btnLabel
      });
  }

  renderCollapsibleBox() {
    return (
      <div>
        <button onClick={this.toggleBox}>{this.state.buttonLabel}</button>
        <div className={!this.state.boxExpanded && 'hidden'}>
            {this.state.data}
        </div>
      </div>
    )
  }

  render() {
    return (
       <div>
          {this.renderCollapsibleBox()}
      </div>
    );
  }
}

export default ExpandBox;
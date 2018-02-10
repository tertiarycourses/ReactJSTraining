import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShowsByQuery } from './ReduxActions';

class ReduxShows extends Component {
  constructor(props) {
    super(props);
    this.state = {  query: 'thrones' };
  }

  componentWillMount() {
    this.props.fetchShowsByQuery(this.state.query);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if(nextProps.queriedShows.all) {
      this.setState({
        'queriedShows' : nextProps.queriedShows.all
      });
    }
  }

  renderShows() {
    if(this.state.queriedShows) {
      var showlist = this.state.queriedShows.map((show, i) => {
        return (
          <Row key={i} className="mb-3">
            <Col md={4}>
                <img src={show.show.image.medium} />
            </Col>
            <Col md={8}>
                <h4>{show.show.name}</h4>
                <div dangerouslySetInnerHTML={{__html: show.show.summary}} />
            </Col>
          </Row>
        );
      });
      return showlist;
    } else {
      return 'loading shows...';
    }
  }

  render() {
    return (
      <div className="container">
        <Row>
            {this.renderShows()}
        </Row>
      </div>
    );
  }
}

function mapStateToProps({ queriedShows }) {
  return { queriedShows };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchShowsByQuery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxShows);

import {Row, Col, Panel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class ReactBoostrapLayout extends Component {

  render() {
    return (
      <div className="container">
        <Row>
          <Col md={6}>
            <Panel className="dashboard-panel" header="Holdings">
              Panel for displaying current asset holdings.
            </Panel>
          </Col>
          <Col md={6}>
            <Panel className="dashboard-panel" header="Performance">
              Panel for displaying curent asset performance.
           </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ReactBoostrapLayout;
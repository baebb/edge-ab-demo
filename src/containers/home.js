import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <h1 className="text-center">A/B testing @ edge demo</h1>
            <h4 className="text-center site-version">A</h4>
            <h4 className="text-center">Site</h4>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect()(Home);
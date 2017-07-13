import React, {Component} from 'react'
import Head from 'next/head'
import { inputChange } from '../store'
import { Col, Row, FormControl, Button, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Download extends Component {
  inputChange = (e) => {
    const text = e.target.value
    this.props.inputChange(text)
  }

  render () {
    const { state } = this.props
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <div>
          <Row style={{ marginTop: '30px' }}>
            <form>
              <Col lg={8} lgOffset={2}>
                <InputGroup>
                  <FormControl onChange={(e) => this.inputChange(e)} type="text" placeholder="Search engine"/>
                  <InputGroup.Button>
                    <Button bsStyle="primary"><span className="glyphicon glyphicon-search"></span> Search</Button>
                  </InputGroup.Button>
                </InputGroup>
              </Col>
            </form>
          </Row>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ( state ) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: bindActionCreators(inputChange, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Download);
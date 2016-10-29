import React, { PropTypes, Component } from 'react';
import { reduxForm } from 'redux-form';
import { Modal, Button, ControlLabel, Form, FormControl, FormGroup, Col, HelpBlock } from 'react-bootstrap';
import Select from 'react-select';
import _ from 'lodash';

import Tabs, { TabPane } from 'rc-tabs';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react/lib/update';
import Card from '../share/Card';

const img = require('../../assets/images/loading.gif');

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = '必填';
  }

  return errors;
};

@reduxForm({
  form: 'screen',
  fields: [ 'name', 'description', 'required_fields' ],
  validate
})
@DragDropContext(HTML5Backend)
export default class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = { ecode: 0, activeKey: '1', cards: [], addFieldIds: '', enableAdd: false, removeIconShow: false, hoverId: '' };
    this.moveCard = this.moveCard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  static propTypes = {
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    values: PropTypes.object,
    fields: PropTypes.object,
    options: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired
  }

  async handleSubmit() {
    const { values, create, close } = this.props;
    if (values.required_fields) {
      values.required_fields = _.filter(values.required_fields.split(','), (val) => { return _.findIndex(this.state.cards, { id: val }) !== -1 });
    }
    const ecode = await create(
      _.assign(values, 
        { fields: _.map(this.state.cards, _.iteratee('id')) }
      )
    );

    if (ecode === 0) {
      this.setState({ ecode: 0 });
      close();
    } else {
      this.setState({ ecode: ecode });
    }
  }

  handleCancel() {
    const { close, submitting } = this.props;
    if (submitting) {
      return;
    }
    this.setState({ ecode: 0 });
    close();
  }

  deleteCard(i) {
    const cardId = this.state.cards[i].id;

    this.state.cards.splice(i, 1);
    this.setState({ cards: this.state.cards });
  }

  handleChange(fields) {
    if (fields !== '') {
      this.setState ({ addFieldIds: fields, enableAdd: true });
    } else {
      this.setState ({ enableAdd: false });
    }
  }

  add() {
    const { options } = this.props;
    const fids = this.state.addFieldIds.split(',');
    for (let i = 0; i < fids.length; i++)
    {
      const field = _.find(options.fields || [], function(o) { return o.id === fids[i]; });
      this.state.cards.push({ id: field.id, text: field.name });
    }
    this.setState({ cards: this.state.cards, addFieldIds: '', enableAdd: false });
  }

  moveCard(dragIndex, hoverIndex) {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];

    this.setState(update(this.state, {
      cards: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      }
    }));
  }

  onTabClick(key) {
    if (key === this.state.activeKey)
    {
      this.setState({ activeKey: '' });
    }
  }

  onTabChange(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const { fields: { name, description, required_fields }, handleSubmit, invalid, submitting, options } = this.props;

    const { cards, enableAdd } = this.state;
    const allFields = _.map(options.fields || [], function(val) {
      return { label: val.name, value: val.id };
    });

    const screenFields = _.map(cards || [], function(val) {
      return { label: val.text, value: val.id };
    });

    return (
      <Modal { ...this.props } onHide={ this.handleCancel } backdrop='static' aria-labelledby='contained-modal-title-sm'>
        <Modal.Header closeButton style={ { background: '#f0f0f0', height: '50px' } }>
          <Modal.Title id='contained-modal-title-la'>新建界面</Modal.Title>
        </Modal.Header>
        <form onSubmit={ handleSubmit(this.handleSubmit) }>
        <Modal.Body className={ submitting ? 'disable' : 'enable' } style={ { height: '450px', overflow: 'auto' } }>
          <Tabs
            activeKey={ this.state.activeKey }
            onTabClick={ this.onTabClick.bind(this) } 
            onChange={ this.onTabChange.bind(this) } >
            <TabPane tab='基本' key='1'>
              <div style={ { paddingTop: '15px' } }>
                <FormGroup controlId='formControlsText' validationState={ name.touched && name.error ? 'error' : '' }>
                  <ControlLabel><span className='txt-impt'>*</span>界面名</ControlLabel>
                  <FormControl type='text' { ...name } placeholder='界面名'/>
                  { name.touched && name.error && <HelpBlock style={ { float: 'right' } }>{ name.error }</HelpBlock> }
                </FormGroup>
                <FormGroup controlId='formControlsText'>
                  <ControlLabel>描述</ControlLabel>
                  <FormControl type='text' { ...description } placeholder='描述内容'/>
                </FormGroup>
              </div>
            </TabPane>
            <TabPane tab='字段配置' key='2'>
              <div style={ { paddingTop: '15px' } }>
                <Form horizontal>
                  <FormGroup controlId='formControlsText'>
                    <Col sm={ 10 }>
                      <Select simpleValue options={ _.reject(allFields, function(o) { return _.findIndex(cards, function(o2) { return o2.id === o.value; }) !== -1; }) } clearable={ false } value={ this.state.addFieldIds } onChange={ this.handleChange.bind(this) } placeholder='选择添加字段(可多选)' multi/>
                    </Col>
                    <Col sm={ 2 }>
                      <Button onClick={ this.add.bind(this) } disabled={ !enableAdd }>添加</Button>
                    </Col>
                  </FormGroup>
                </Form>
                { cards.length > 0 && <p>通过上下拖拽改变显示顺序。</p> }
                { cards.length > 0 ?
                  cards.map((op, i) => {
                    return (
                      <Card key={ op.id }
                        index={ i }
                        id={ op.id }
                        text={ op.text }
                        moveCard={ this.moveCard }
                        deleteCard={ this.deleteCard.bind(this, i) }/>
                    );
                  }) 
                  :
                  <p>此界面暂无字段。</p>
                }
              </div>
            </TabPane>
            <TabPane tab='必填字段' key='3'>
              <div style={ { paddingTop: '15px' } }>
                <FormGroup controlId='formControlsSelect'>
                  <ControlLabel>必填字段</ControlLabel>
                  <Select simpleValue options={ screenFields } clearable={ false } value={ required_fields.value } onChange={ newValue => { required_fields.onChange(newValue) } } placeholder='选择必填字段(可多选)' multi/>
                </FormGroup>
              </div>
            </TabPane>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <span className='ralign'>{ this.state.ecode !== 0 && !submitting && 'aaaa' }</span>
          <image src={ img } className={ submitting ? 'loading' : 'hide' }/>
          <Button className='ralign' disabled={ submitting || invalid } type='submit'>确定</Button>
          <Button disabled={ submitting } onClick={ this.handleCancel }>取消</Button>
        </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

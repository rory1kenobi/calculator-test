import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add numbers together', () => {
    const button4 = container.find('#number4');
    const operator_add = container.find('#operator_add');
    const button1 = container.find('#number1');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button4.simulate('click'); 
    operator_add.simulate('click');
    button1.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should be able to subtract numbers', () => {
    const runningTotal = container.find('#running-total');
    const button7 = container.find('#number7');
    const operator_minus = container.find('#operator-subtract')
    const button4 = container.find('#number4');
    const operator_equals = container.find('#operator-equals');
    button7.simulate('click'); 
    operator_minus.simulate('click');
    button4.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to multiply numbers', () => {
    const runningTotal = container.find('#running-total');
    const button3 = container.find('#number3');
    const operator_multiply = container.find('#operator-multiply')
    const button5 = container.find('#number5');
    const operator_equals = container.find('#operator-equals');
    button3.simulate('click'); 
    operator_multiply.simulate('click');
    button5.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');

  })

  it('should be able to divide numbers', () => {
    const runningTotal = container.find('#running-total');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const operator_divide = container.find('#operator-divide')
    const button7 = container.find('#number7');
    const operator_equals = container.find('#operator-equals');
    button2.simulate('click'); 
    button1.simulate('click'); 
    operator_divide.simulate('click');
    button7.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to have multiple numbers on the screen', () => {
    const runningTotal = container.find('#running-total');
    const button9 = container.find('#number9');
    button9.simulate('click');
    button9.simulate('click');
    button9.simulate('click');
    expect(runningTotal.text()).toEqual('999');
  })

  it('should be able to do multiple sums', () => {
    const button5 = container.find('#number5');
    const operator_add = container.find('#operator_add');
    const button1 = container.find('#number1');
    const operator_multiply = container.find('#operator-multiply');
    const button7 = container.find('#number7');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button5.simulate('click'); 
    operator_add.simulate('click');
    button1.simulate('click');
    operator_multiply.simulate('click');
    button7.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('42');
  })

  it('should be able to clear without affecting the sum', () => {
    const runningTotal = container.find('#running-total');
    const button7 = container.find('#number7');
    const operator_add = container.find('#operator_add');
    const clear = container.find('#clear');
    const button8 = container.find('#number8');
    const operator_equals = container.find('#operator-equals');
    button7.simulate('click'); 
    operator_add.simulate('click');
    clear.simulate('click');
    operator_add.simulate('click');
    button8.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');



  })

  
})

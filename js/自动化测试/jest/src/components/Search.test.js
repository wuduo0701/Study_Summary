import React from 'react';
//should 组件挂载的方法
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
Enzyme.configure({
  adapter: new Adapter()
})
describe('测试 Search', () => {
  // jest框架的生命周期， 每个用例之前都会调用
  it('normal render', () => {
    let wrap = mount(<Search onSubmit={() => {}}/>);
    expect(() => {
      wrap.setProps({});
      wrap.unmount();
    }).not.toThrow();
  })
  it('container input ele', () => {
    let wrap = mount(<Search onSubmit={() => {}}/>);
    let len = wrap.find('input').length;
    expect(len).toBe(1);
  })
  it('input change', () => {
    let wrap = mount(<Search onSubmit={() => {}}/>);
    wrap.setState({ content: ''});
    let input = wrap.find('input');
    input.simulate('change', {
      target: {
        value: '😄😄'
      }
    });
    expect(wrap.state().content).toBe('😄😄');
  })
  it('test onSubmit callback', () => {
    // onSubmit callback called !!!
    // 模拟一个函数
    let fn = jest.fn();
    // let fn = (content) => {}
    let wrap = mount(<Search onSubmit={fn}/>)
    wrap.setState({ content: 'hhh' })
    let input = wrap.find('input');
    input.simulate('keyUp', {
      keyCode: 13
    })
    expect(fn).toHaveBeenCalled();
    // this.props.onSubmit(content);
    // 
    expect(fn).toHaveBeenCalledWith('hhh');
  })
})
import React from 'react';

class Search extends React.Component {
  state = {
    content: ''
  }
  render() {
    // 受控组件，收当前状态的函数
    return(
      <input 
      type="text" 
      value={this.state.content}
      onChange={this.handleChange}
      onKeyUp={this.handleKeyUp}
      >  
      </input>
    )
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleKeyUp = (e) => {
    const { content } = this.state;
    if(e.keyCode === 13 && content) {
      this.props.onSubmit(content);
      this.setState({
        content: ''
      })
    }
  }
}

export default Search;
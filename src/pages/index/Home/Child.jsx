import React, { Component } from 'react'

export class Child extends React.PureComponent {

  state = {
    msg: '原来的'
  }

  componentWillMount() {
    this.updateMsg && this.props.func(this.updateMsg)
  }

  componentWillReceiveProps(nextProps) {
    console.log('child componentWillReceiveProps', nextProps)
  }

  updateMsg = (text) => {
    console.log('in child,', text)
    this.setState({ msg: text }, () => {
      console.log('in child,finish updateMsg', this.state.msg)
    })
  }

  render() {
    console.log('child re-render')
    return (
      <span>{this.state.msg}</span>
    )
  }
}

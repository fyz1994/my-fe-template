import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'igroot'
import { Child } from './Child'

export class Home extends Component {
  static displayName = 'Home'

  render() {
    console.log('parent re-render', this)
    return (
      <div style={styles.home}>
        <Button onClick={this.parentClick}>测试</Button>
        <Child func={this.setChildFunc}></Child>
        <Button onClick={this.parentClick2}>测试父组件的刷新会不会引起子组件的刷新</Button>
        {/* <Card title="模块1" bordered={false} style={styles.marginTop}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="模块2" bordered={false} style={styles.marginTop}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="模块3" bordered={false} style={styles.marginTop}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card> */}
      </div>
    )
  }

  parentClick2 = () => this.setState({ baby: '123' })

  setChildFunc = (f) => {
    this.childFunc = f
  }

  parentClick = () => {
    this.childFunc('新的内容信息')
  }

}

const styles = {
  home: {
    padding: 20
  },
  marginTop: {
    marginTop: 20
  }
}

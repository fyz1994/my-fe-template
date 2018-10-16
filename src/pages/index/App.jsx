/**
 * 应用入口
 */
import React, { Component } from 'react'
import RouterConfig from 'igroot-router-config'

import { withLogin } from 'sso-login'
import { getBaseUrl } from '@/util/function'
// 路由配置
import config from './routerConfig'

// 接入登录的时候取消下面这一行的注释
// @withLogin(getBaseUrl())
export class App extends Component {
  render() {
    return <RouterConfig config={config} />
  }
}

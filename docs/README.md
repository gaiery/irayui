# 快速开始

#### 安装组件库

```bash
npm i iray-ui -S
```

#### 使用组件库
> 在main.js中引用组件库
```javascript
//全部引入
import 'iray-ui/dist/css/index.css';
import RUI from 'iray-ui'
Vue.use(RUI)

//按需引入
import 'iray-ui/dist/css/card.css'
import { Card } from 'iray-ui'
Vue.use(Card)
```
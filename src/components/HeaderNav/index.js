import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Card } from 'antd';
import style from './index.module.less'
import {dataTime} from './data'

// let userdata =[
//   {name:'个人中心',icon:'user',divider:false},
//   {name:'个人设置',icon:'setting',divider:true},
//   {name:'退出登录',icon:'logout',divider:false},
// ]
let langData =[
  {name:'简体中文',icon:'user',divider:false},
  {name:'繁体中文',icon:'setting',divider:true},
  {name:'英语',icon:'logout',divider:false},
]

function createMenu(data){
 return (
   <Menu>
     {data.map((item,index)=>{
       return(         
          <Menu.Item key={index}>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            <Icon type={item.icon} />{item.name}
            </a>
            {/* <Menu.Divider></Menu.Divider> */}
          </Menu.Item>
       )
     })}
   </Menu>
 )
}
class HeaderNav extends Component {
  state = { 
    currentlyTime:dataTime(Date.now())//获取当前时间
   }
   //获取时间 并且每秒刷新
   getTime=()=>{
   this.time =  setInterval(() => {
       let currentlyTime = dataTime(Date.now())
       this.setState({currentlyTime})
     }, 1000);
   }
   componentDidMount(){
     this.getTime()
   }
   componentWillUnmount(){
     clearInterval(this.time)
   }
  render() { 
    let {currentlyTime} = this.state
    return ( 
      <div className={style.box}>
        <div className={style.time}>
          <span>{currentlyTime}</span>
         </div>
        <div className={style.right}>
        {/* <Dropdown overlay={createMenu(userdata)}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href='//#endregion'>
            Hover me <Icon type="down" />
          </a>
        </Dropdown> */}
        <Dropdown overlay={createMenu(langData)}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href='//#endregion'>
            语言选择 <Icon type="down" />
          </a>
        </Dropdown>
        </div>
      </div>
     );
  }
}
 
export default HeaderNav;
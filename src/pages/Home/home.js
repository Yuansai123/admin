import React,{Component} from 'react'
import style from './index.module.less'
import { Card, Descriptions,Calendar } from 'antd'

function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }
class Home extends Component{
    state={ }
    render(){
        return(
            <div className={style.box}>
               <Card><h3 className={style.nav}>首页</h3>
               <p className={style.name}><span></span>欢迎登录!</p>
               </Card>
               <Descriptions title="User Info" layout="vertical" className={style.table}>
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Address" span={2}>
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
               </Descriptions>
               <div className={style.year}>
                   <br /><br /><br />
                   <Calendar onPanelChange={onPanelChange}  />
               </div>
               
            </div>
        )
    }
}
export default Home
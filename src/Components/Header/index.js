import React from 'react'
import './style.css'
import { Avatar,Badge } from 'antd';
import {
   MailOutlined,BellOutlined,LeftOutlined
  } from '@ant-design/icons'
import {useHistory} from 'react-router-dom'
export default function Header({switchNav,setSwitchNav}) {
const history = useHistory()
  const handleSwitch=()=>{
    setSwitchNav(false)
    history.push('/')
  }
    return (
        <div className={switchNav ? "header-conatiner active" : "header-conatiner"}>
        <div className="wrapper-conatiner">
          <div className="wrapper-left">
           {!switchNav ?
           <>
            <a href="javascript:void(0)" className="logo">
            <Avatar size={60}  src="https://i.pinimg.com/736x/0c/64/8c/0c648c286be8ec6c3289b36183f9e8b6.jpg" />
            </a>
            <div className="item-datecontainer">
              <span>{(new Date()).toString().split(' ').splice(1,3).join(' ')}</span>
              <span>Alina</span>
            </div>
            </>
            :
            <div className="logo">
              <Badge >
                <Avatar onClick={handleSwitch} style={{backgroundColor:'#F1F1F7'}} shape="square" icon={<LeftOutlined style={{color:'#000'}} /> }/>
            </Badge>
            </div>
            }
            
          </div>
          {!switchNav && <div className="wrapper-right" >
            <Badge dot>
                <Avatar style={{backgroundColor:'#3E51C8'}} shape="square" icon={<MailOutlined /> }/>
            </Badge>
            <Badge dot>
                <Avatar style={{backgroundColor:'#3E51C8'}} shape="square" icon={<BellOutlined /> }/>
            </Badge>
          </div>}
          <div className="wrapper-right" >
            <div className="wrapper-right__hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
            </div>
          </div>
        </div>
      </div>
    )
}

import React from 'react'
import { Popover, Button } from 'antd';

// styles & other imports
import styles from "../../styles/components/header.module.scss";
import Logo from '../../assets/logo.svg'
import { STRINGS } from '../constants/Strings';
import { Popup } from '../todo/Popup';


const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo not found" />
        <span className={styles.logoTitle}>{STRINGS.HEADER_LOGO_TITLE}</span>
      </div>
      <Popover className={styles.todo} content={Popup} trigger="click" placement='bottomRight'>
          <Button>To Dos</Button>
        </Popover>
      <div className={styles.subMenuContainer}>
        <select className={styles.select}>
          <option value="WhyMarvel">{STRINGS.HEADER_SUBMENU_WHY_MARVEL}</option>
        </select>
        <span>{STRINGS.ENTERPRISE}</span>
        <span>{STRINGS.PRICING}</span>
        <span>{STRINGS.SIGN_IN}</span>
        <button className={styles.signUpButton}>{STRINGS.SIGN_UP_FREE}</button>
        <Popover content={Popup} trigger="click" placement='bottomRight'>
          <Button>{STRINGS.TODO}</Button>
        </Popover>
      </div>
    </div>
  )
}

export default Header

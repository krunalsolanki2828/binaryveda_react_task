import React from 'react'

// styles & other imports
import styles from '../../styles/components/footer.module.scss';
import Logo from '../../assets/logo.svg'
import { STRINGS } from '../constants/Strings';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.container}>
        <img src={Logo} alt='logo not found' />
        <div className={styles.footer}>
          <div className={styles.overviewContainer}>
            <span className={styles.footerTitle}>{STRINGS.FOOTER_OVERVIEW}</span>
            <div className={styles.footerSubTitle}>
              <span>{STRINGS.FOOTER_WHY_MARVEL}</span>
              <span>{STRINGS.FOOTER_ENTERPRISE}</span>
              <span>{STRINGS.FOOTER_PRICE}</span>
              <span>{STRINGS.FOOTER_REQUEST_A_DEMO}</span>
              <span>{STRINGS.FOOTER_EXPLORE}</span>
              <span>{STRINGS.FOOTER_APPS}</span>
              <span>{STRINGS.FOOTER_DEVELOPER_API}</span>
            </div>
          </div>
          <div className={styles.overviewContainer}>
            <span className={styles.footerTitle}>{STRINGS.FOOTER_FEATURES}</span>
            <div className={styles.footerSubTitle}>
              <span>{STRINGS.FOOTER_WIREFRAMING}</span>
              <span>{STRINGS.FOOTER_DESIGN}</span>
              <span>{STRINGS.FOOTER_PROTOTYPING}</span>
              <span>{STRINGS.FOOTER_COLLABORATION}</span>
              <span>{STRINGS.FOOTER_HANDOFF}</span>
              <span>{STRINGS.FOOTER_INTEGRATIONS}</span>
              <span>{STRINGS.FOOTER_SKETCH_PLUGIN}</span>
            </div>
          </div>
          <div className={styles.overviewContainer}>
            <span className={styles.footerTitle}>{STRINGS.FOOTER_SUPPORT}</span>
            <div className={styles.footerSubTitle}>
              <span>{STRINGS.FOOTER_HEL_CENTER}</span>
              <span>{STRINGS.FOOTER_TERMS_OF_SERVICE}</span>
              <span>{STRINGS.FOOTER_PRIVACY}</span>
              <span>{STRINGS.FOOTER_SECURITY}</span>
            </div>
          </div>
          <div className={styles.overviewContainer}>
            <span className={styles.footerTitle}>{STRINGS.FOOTER_MARVEL}</span>
            <div className={styles.footerSubTitle}>
              <span>{STRINGS.FOOTER_BLOG}</span>
              <span>{STRINGS.FOOTER_OUR_TEAM}</span>
              <span>{STRINGS.FOOTER_CONTACT_US}</span>
              <span>{STRINGS.FOOTER_SUCCESS_STORIES}</span>
              <span>{STRINGS.FOOTER_BRAND_GUIDELINES}</span>
            </div>
          </div>
          <div className={styles.overviewContainer}>
            <span className={styles.footerTitle}>{STRINGS.FOOTER_FOLLOW}</span>
            <div className={styles.footerSubTitle}>
              <span>{STRINGS.FOOTER_TWITTER}</span>
              <span>{STRINGS.FOOTER_DRIBBBLE}</span>
              <span>{STRINGS.FOOTER_FACEBOOK}</span>
              <span>{STRINGS.FOOTER_GITHUB}</span>
              <span>{STRINGS.FOOTER_WORKABLE}</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer

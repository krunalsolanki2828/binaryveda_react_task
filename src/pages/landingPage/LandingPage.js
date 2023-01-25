import React from 'react'

// styles & other imports
import styles from '../../styles/pages/landingPage.module.scss';
import Layout from '../../layouts/Layout';
import { STRINGS } from '../../components/constants/Strings';



const LandingPage = () => {
	return (
		<Layout>
			<div className={styles.mainContainer}>
				<div className={styles.container}>
					<div className={styles.futureContainer}>
						<span className={styles.futureTitle}>{STRINGS.LANDING_PAGE_TITLE_FUTURE} </span>
						<span className={styles.subTitle}>{STRINGS.LANDINGPAGE_SUBTITLE}</span>
						<div className={styles.buttonContainer}>
							<button className={styles.submitButton}>{STRINGS.SUBMIT_YOUR_APP}</button>
							<button className={styles.dockButton}>{STRINGS.VIEW_API_DOCS}</button>
						</div>
						<div className={styles.mobileButtonContainer}>
							<button className={styles.submitButton}>{STRINGS.VIEW_THE_DOCS}</button>
							<button className={styles.dockButton}>{STRINGS.MANAGE_YOUR_APPS}</button>
						</div>
					</div>
					<img className={styles.image} src={require('../../assets/landing.png')} alt='landing photo not found' />
				</div>

				<div className={styles.experienceContainer}>
					<div className={styles.experienceTitle}>
						<span>{STRINGS.EXPERIENCE_FREEDOM_TITLE}</span>
					</div>
					<div className={styles.description}>
						<span>{STRINGS.EXPERIENCE_DESCRIPTION}</span>
					</div>
				</div>

				<div className={styles.cardContainer}>
					<div className={styles.teamContainer}>
						<img src={require('../../assets/apiTeam.png')} alt='team photo not found' />
						<span className={styles.cardTitle}>{STRINGS.DEDICATED_API_TEAM}</span>
						<span className={styles.cardDescription}>{STRINGS.OUR_TEAM_DESCRIPTION}</span>
					</div>
					<div className={styles.teamContainer}>
						<img src={require('../../assets/graphQL.png')} alt='team photo not found' />
						<span className={styles.cardTitle}>{STRINGS.OUR_API_USES_GRAPH_QL}</span>
						<span className={styles.serverDescription}>{STRINGS.HANDLING_SERVER_DESCRIPTION}</span>
					</div>
					<div className={styles.teamContainer}>
						<img src={require('../../assets/superchargeWorkflow.png')} alt='team photo not found' />
						<span className={styles.cardTitle}>{STRINGS.SUPERCHARGE_YOUR_WORKFLOW}</span>
						<span className={styles.automateDescription}>{STRINGS.AUTOMATE_WORKFLOWS_DESCRIPTION}</span>
					</div>
				</div>
				<div className={styles.lastContainer}>
					<div className={styles.showcaseContainer}>
						<div className={styles.subContainer}>
							<span className={styles.showcaseTitle}>{STRINGS.SHOWCASE_YOUR_APP_TITLE} </span>
							<span className={styles.showcaseSubTitle}>{STRINGS.BUILDING_SOMETHINGS_DESCRIPTION}</span>
							<div className={styles.buttonContainer}>
								<button className={styles.partnerButton}>{STRINGS.BECOME_A_PARTNER}</button>
								<button className={styles.dockButton}>{STRINGS.VIEW_INTEGRATIONS}</button>
							</div>
						</div>
						<img className={styles.showcaseImage} src={require("../../assets/showcase.png")} alt="shoe image" />
					</div>


					<div className={styles.slackContainer}>
						<img className={styles.slackImage} src={require('../../assets/botbot.png')} alt='slack image' />
						<div className={styles.subContainer}>
							<span className={styles.showcaseTitle}>{STRINGS.A_SLACK_DESCRIPTION}</span>
							<span className={styles.showcaseSubTitle}>{STRINGS.BUILDING_SOMETHINGS_DESCRIPTION}</span>
							<div className={styles.buttonContainer}>
								<button className={styles.partnerButton}>{STRINGS.BECOME_A_PARTNER}</button>
								<button className={styles.dockButton}>{STRINGS.VIEW_INTEGRATIONS}</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</Layout>
	)
}

export default LandingPage

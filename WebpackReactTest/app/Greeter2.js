// Greeter.js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';

class Greeter2 extends Component {
	render() {
		return (
			<div className={styles.root}>
				{config.greetText}
			</div>
		)
	}
}

export default Greeter2
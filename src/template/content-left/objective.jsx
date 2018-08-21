import React from 'react'

import Icon from '../icons/icons'

export default props => {

	const data = props.data || []

	const objectiveTitle = data.title
	const objectiveDescription = data.description

	return (
		<section className="objective">
			<Icon text={objectiveTitle} icon="objective"/>
			<p>{objectiveDescription}</p>
		</section>
	)
}
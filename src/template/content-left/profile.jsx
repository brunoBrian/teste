import React from 'react'

import Icon from '../icons/icons'

export default props => {

	const data = props.data || []

	const profileTitle = data.title
	const profileDescription = data.description

	return (
		<section className="profile">
			<Icon text={profileTitle} icon="profile"/>
			<p>{profileDescription}</p>
		</section>
	)
}
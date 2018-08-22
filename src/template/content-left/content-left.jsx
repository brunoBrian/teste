import React from 'react'

import Main from './main'
import Profile from './profile'
import Objective from './objective'
import PersonalSkill from './personal-skill'
import Contact from './contact'

export default props => {
	const data = props.data || []

	return (
		<div className="content-left">
			<div className="content">
				<Main name={data.name} thumb={data.thumb} profession={data.profession} />
				<Profile data={data.profile} />
				<Objective data={data.objective} />
				<PersonalSkill data={data.personalSkill} />
				<Contact data={data.contactMe} />
			</div>
		</div>
	)
}
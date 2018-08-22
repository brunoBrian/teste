import React from 'react'

import Education from './education'
import Experience from './experience'
import ProfessionalSkills from './professional-skills'
import Award from './award'

export default props => {
	const data = props.data || []

	return (
		<div className="content-right">
			<div className="content">
				<Education data={data.education} />
				<Experience data={data.experience} />
				<ProfessionalSkills data={data.professionalSkill} />
				<Award data={data.award} />
			</div>
		</div>
	)
}
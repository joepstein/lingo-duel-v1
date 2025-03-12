import { Link } from 'react-router-dom'

export function SkillChoice(){

	return(
		<>
			<section id='skill-choice-page'>
				<div class='content'>
					<h1>Please select the skill you would like to train</h1>
					<div class='skill-options'>
						<Link to='/conjugation' role='button'>Conjugation</Link>
						<Link role='disabled-button'>Vocabulary</Link>
						<Link role='disabled-button'>Speaking</Link>
					</div>
				</div>
			</section>
		</>
	)
}
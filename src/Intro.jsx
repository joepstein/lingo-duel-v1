import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export function Intro(){

	const initialContentRef = useRef()
	const revealedContentRef = useRef()
	const overlayRef = useRef()

	useEffect(() => {

		setTimeout(() => {
	      overlayRef.current.classList.add('animate') // 1s

	        setTimeout(() => {
		    	overlayRef.current.classList.remove('animate')
		    	initialContentRef.current.style.display = 'none'
		    	revealedContentRef.current.style.display = 'block'
		    	overlayRef.current.classList.add('unanimate') // 1s

		    	setTimeout(() => {
			    	overlayRef.current.style.display = 'none'
			    }, 1000)
	    	}, 1000)
	    }, 1000)

	}, [])

	return(
		<>
			<section id='welcome-page'>
				{/*<a href="https://www.flaticon.com/free-icons/fencing" title="fencing icons">Fencing icons created by Freepik - Flaticon</a>*/}
				<div ref={initialContentRef} className='initial-content'>
					<img id='home-icon' src='fencing-icon.png' />
					<h1>Lingo Duel</h1>
				</div>
				<div ref={revealedContentRef} className='revealed-content'>
					<p>Let's do 10 quick questions to assess your skill level before we begin!</p>
					<Link to='skill-choice' role='button'>Continue</Link>
				</div>
				<div ref={overlayRef} id='overlay'></div>
			</section>
		</>
	)
}
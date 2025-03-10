import { useState, useEffect, useRef } from "react"

export function LanguageGame(){

	const [conjugationGame, setConjugationGame] = useState({ targetVerb : '', conjugatedVerb : '', answerTense : '', elo : 0, tenseList : [], randomTenses : [] })

	const rating = useRef(0)
	const playerElo = useRef(1200)
	const eloDifference = useRef(0)
	const prevAnswer = useRef('')
	const questionElo =useRef(0)

	useEffect(() => {
	    const currentConjugationGame = getNewVerb(spanishVerbData)
	    setConjugationGame({...currentConjugationGame})
	  }, [])


	function getNewVerb(spanishVerbData, answerStatus=''){
	    // Get a random verb
	    const verbList = Object.keys(spanishVerbData)
	    const randomVerbIndex = Math.floor(Math.random() * verbList.length)
	    const verb = verbList[randomVerbIndex]

	    //Get a random tense
	    const allTenses = ["present-tense", "future-tense", "preterite-tense", "present-subjunctive-tense", "future-subjunctive-tense"]
	    const randomTenseIndex = Math.floor(Math.random() * allTenses.length)
	    const verbTense = allTenses[randomTenseIndex]

	    // Get a random conjugation
	    const randomConjIndex = Math.floor(Math.random() * 6)
	    const randomVerbConjugated = spanishVerbData[verb][verbTense][randomConjIndex]

	    // Get a list of tenses mixed with answer
	    const answerTenseShuffled = calculateTenseList(verbTense, allTenses)

	    // Get elo rating
	    const conjElo = {
	      "present-tense" : 600,
	      "future-tense" : 1000,
	      "preterite-tense" : 1400,
	      "present-subjunctive-tense" : 1800,
	      "future-subjunctive-tense" : 2200
	    }

	    // Calculate elo
	    const expectedWinPercentage = (1/(1 + Math.pow(10, ((questionElo.current - playerElo.current)/400))))
	    const calculatedEloDifferenceWin = Math.floor(30*(1 - expectedWinPercentage))
	    const calculatedEloDifferenceLoss = Math.floor(30*(0 - expectedWinPercentage))

	    // if prevAnswer === '' then the below doesn't run
	    if(answerStatus === "Right!"){
	    	eloDifference.current = calculatedEloDifferenceWin
	   		playerElo.current = playerElo.current + eloDifference.current
	    } else if(answerStatus === "Wrong!"){
	    	eloDifference.current = calculatedEloDifferenceLoss
	   		playerElo.current = playerElo.current + eloDifference.current
	    }

	    return { targetVerb : verb , conjugatedVerb : randomVerbConjugated, randomTenses : answerTenseShuffled, elo : conjElo[verbTense] }
	  }

	  function calculateTenseList(answerTense, tenseList){
	    const answerPlacement = Math.floor(Math.random() * 3)

	    const answerIndex = tenseList.indexOf(answerTense)
	    const updatedTenses = [...tenseList.slice(0, answerIndex), ...tenseList.slice(answerIndex + 1)]

	    const randomTenses = [...updatedTenses].sort(() => 0.5 - Math.random()).slice(0,3)

	    randomTenses.splice(answerPlacement, 0, answerTense + '-answer')

	    randomTenses.forEach((tense, index) => {
	      if(index === answerPlacement){
	        randomTenses[index] = {val : tense, id : crypto.randomUUID(), selected : false, answer : true }
	      } else {
	        randomTenses[index] = {val : tense, id : crypto.randomUUID(), selected : false, answer : false }
	      }
	    })

	    return randomTenses
	  }


	const checkAnswer = () => {
		event.preventDefault()

		if(document.querySelectorAll('li[data-selected="true"]').length > 0){
			conjugationGame.randomTenses.map( (tense, index) => {
				if(tense.answer === true){
					if(document.querySelector('li[data-selected="true"]').dataset.id === tense.id){
						prevAnswer.current = 'Right!'
					} else {
						prevAnswer.current = 'Wrong!'
					}

					questionElo.current = conjugationGame.elo
				}
			})

			const nextConjugationGame = getNewVerb(spanishVerbData, prevAnswer.current)
    		setConjugationGame({...nextConjugationGame})
		}
	}

	const selectTense = id => {
		setConjugationGame(currentConjugationGame => {
			return { ...currentConjugationGame, randomTenses : currentConjugationGame['randomTenses'].map(tense => {
				if(tense.id === id){
					if(event.target.parentNode.dataset.selected === 'false'){
						return {...tense, selected : true}
					} else {
						return {...tense, selected : false}
					}
				} else {
					return {...tense, selected : false}
				}
			})}
		})
	}

	return (
		<>
			<section id='conjugation-game'>
				<h1>{conjugationGame.targetVerb}</h1>
				<form onSubmit={checkAnswer} className="conugationForm">
					<h2>{conjugationGame.conjugatedVerb}</h2>
					<ul className="list">
						{conjugationGame.randomTenses.map((tense, index) => {
							return(
								<li 
									className='tense-option'
									key={tense.id}
									data-id={tense.id}
									data-selected={tense.selected}
									onClick = {() => selectTense(tense.id)} >

									<p>{tense.val}</p>
								</li>
							)
						})}
				    </ul>
				    <button type="submit" className="submit-button">Submit</button>
				    <p id="question-elo">The last question had a rating of: {questionElo.current}</p>
				    <p id="current-elo">Your current elo is: {playerElo.current}</p>
				    <p id="prev-answer">Your last answer was: {prevAnswer.current}</p>
				    <p id="rating-change">You gained/lost: {eloDifference.current} rating points</p>
				</form>
			</section>
		</>
	)
}
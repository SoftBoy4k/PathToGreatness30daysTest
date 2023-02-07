import { Navigate } from "react-router-dom"
import Container from "../../components/Container/Container"
import Header from "../../components/Header/Header"
import { tasksRu } from "../../data/tasksFor30daysRu";
import { tasksEn } from "../../data/tasksFor30daysEn";
import { useAuth } from "../../hooks/useAuth";
import './HomePage.css';
import arrowLeft from '../../img/arrow-left.png';
import arrowRight from '../../img/arrow-right.png';
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";

const HomePage = () => {

	const lang = useLanguage(); 
	const {isAuth} = useAuth();
	const [task, setTask] = useState(0); 
	const tasks = lang === 'ru' ? tasksRu : tasksEn;

	const nextTask = () => {
		if (task < tasks.length - 1) {
			setTask(task + 1);
		}
	}

	const prevTask = () => {
		if (task > 0) {
			setTask(task - 1);
		}
	}

	return isAuth ? (
		<div>
			<Header/>
			<Container>
				<h1 className="home__header">{ lang === 'ru' ? `День ${tasks[task].day} / 30` : `Day ${tasks[task].day} / 30`}</h1>
				<div className="home__content">
					<img src={arrowLeft} onClick={prevTask}/>

					<div className="home__textContent">
						<h3 className="home__title">{tasks[task].title}</h3>
						{tasks[task].content.map(({text, isBold}, i) => <p className={ isBold ? "home__text home__text--bold" : "home__text" } key={`${tasks[task]}${i}`}>{text}</p>)}
					</div>

					<img src={arrowRight} onClick={nextTask}/>
				</div>
				
			</Container>
		</div>
	) : <Navigate to="/login" replace/>
}

export default HomePage
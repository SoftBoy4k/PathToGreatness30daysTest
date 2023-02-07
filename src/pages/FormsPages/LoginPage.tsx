import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Login from '../../components/Forms/Login'
import "./FormsPages.css"

const LoginPage = () => {
	return (
		<Container>
			<div className='form-page'>
				<h1 className='form-page__title'>Login Page</h1>
				<Login/>
				<p className='form-page__text'>
					Or <Link className='form-page__link' to="/register">register</Link>
				</p>
			</div>
		</Container>
	)     
}

export default LoginPage
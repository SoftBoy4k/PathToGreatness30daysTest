import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import SingUp from '../../components/Forms/SingUp'
import "./FormsPages.css"

const RegisterPage = () => {
	return (
		<Container>
			<div className='form-page'>
				<h1 className='form-page__title'>Register Page</h1>
				<SingUp/>
				<p className='form-page__text'>
					Or <Link className='form-page__link' to="/login">login</Link>
				</p>
			</div>
		</Container>
	)
}

export default RegisterPage
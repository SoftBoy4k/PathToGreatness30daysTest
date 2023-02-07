import { useRoutes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/FormsPages/LoginPage"
import RegisterPage from "./pages/FormsPages/RegisterPage"


function App() {
	
	const routes = useRoutes([
		{
			path: '/',
			element: <HomePage/>
		},
		{
			path: '/login',
			element: <LoginPage/>
		},
		{
			path: '/register',
			element: <RegisterPage/>
		},

	])

	return (
		<>
			{routes}
		</>
	)
}

export default App

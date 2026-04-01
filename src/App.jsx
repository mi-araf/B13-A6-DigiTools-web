import './App.css'
import ChallengeSection from './Components/ChallengeSection'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Products from './Components/Products/Products'
import Started from './Components/Started'
import Subscription from './Components/Subscription'

function App() {

	return (
		<>
			<Navbar />
			<Hero />
			<Products />

			<Started />
			<Subscription />
			<ChallengeSection />
			<Footer />
		</>
	)
}

export default App

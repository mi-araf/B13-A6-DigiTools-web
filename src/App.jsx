import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ChallengeSection from './Components/ChallengeSection'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Products from './Components/Products/Products'
import Started from './Components/Started'
import Subscription from './Components/Subscription'
import toolsData from '../Public/toolsData.json'

const productsData = toolsData.map((product) => ({
	...product,
	icon: new URL(product.icon, import.meta.url).href,
}))

function App() {
	const [cartItems, setCartItems] = useState([])
	const [activeTab, setActiveTab] = useState('products')

	const handleAddToCart = (product) => {
		setCartItems((prevItems) => {
			if (prevItems.some((item) => item.id === product.id)) {
				toast.info(`${product.name} is already in the cart`, { toastId: `already-${product.id}` })
				return prevItems;
			}
			toast.success(`${product.name} added to cart`, { toastId: `added-${product.id}` })
			return [...prevItems, product];
		})
	}

	const handleRemoveFromCart = (id) => {
		setCartItems((prevItems) => {
			const removedItem = prevItems.find((item) => item.id === id)
			if (removedItem) {
				toast.warning(`${removedItem.name} removed from cart`, { toastId: `removed-${id}` })
			}
			return prevItems.filter((item) => item.id !== id);
		})
	}

	const handleCheckout = () => {
		if (cartItems.length === 0) {
			toast.info('Your cart is already empty', { toastId: 'checkout-empty' })
			return
		}
		setCartItems([])
		toast.success('Proceeding to checkout', { toastId: 'checkout-success' })
	}

	const handleTabChange = (tab) => setActiveTab(tab)

	return (
		<>
			<Navbar cartCount={cartItems.length} onCartClick={() => handleTabChange('cart')} />
			<ToastContainer position="top-right" autoClose={2000} theme="colored" />
			<Hero />
			<Products
				products={productsData}
				cartItems={cartItems}
				activeTab={activeTab}
				setActiveTab={handleTabChange}
				onAddToCart={handleAddToCart}
				onRemove={handleRemoveFromCart}
				onCheckout={handleCheckout}
			/>
			<Started />
			<Subscription />
			<ChallengeSection />
			<Footer />
		</>
	)
}

export default App

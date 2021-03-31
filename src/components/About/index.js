import {
	about,
	heading,
	introduction,
	mission,
	subheading,
} from './About.module.css';


function About() {
	return (
		<div className={about}>
			<h1 className={heading}>CartShop</h1>
			<section className={introduction}>
				<h2 className={subheading}>What we do</h2>
				<p>
				CartShop is an online platform designed to help entrepreneurs and small businesses to create and build their online presence in a cost conscious manner while they grow.  
				</p>
				<br/>
				<p>
				We provide a dedicated web page for each business to showcase products to customers. Our simple and efficient functionality allows customers to place orders and for payment to be made via our secure interface with StripeTM whilst also providing inventory tracking capabilities through our database infrastructure.  Each CartShop link is dedicated to an individual business, so unlike other sites, businesses don’t need to worry about customers being diverted to competitors. 
				</p>
				<br/>
				<p>
				CartShop is designed to be clear and simple to use for both business users and their customers.  Log in requirements are limited to business users only (in partnership with Auth0), allowing customers to browse and purchase products easily but securely. 	
				</p>
				<br/>
				<p>
				We’ve kept our costs to a minimum and if you’re a social enterprise, access to CartShop is free of charge. 
				</p>
			</section>
			<section className={mission}>
				<h2 className={subheading}>Why we do it</h2>
				<p>
				We believe in entrepreneurs and small businesses and we know that that first step onto the web can be a daunting and expensive, but critical one, especially post COVID  and so we’ve created CartShop to help.  
				</p>
			</section>
		</div>
	);
}

export default About;

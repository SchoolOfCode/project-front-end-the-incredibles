import YouTube from '@u-wave/react-youtube';
import { getId } from '../../libs/index';
import {
	heading,
	introduction,
	mission,
	subheading,
	tutorial,
	video,
} from './Tutorial.module.css';
function Tutorial() {
	return (
		<div className={tutorial}>
			<h1 className={heading}>CartShop</h1>
			<section className={introduction}>
				<h2 className={subheading}>Life can be hard, so we like to keep things easy</h2>
				<p>
				You've got enough on your plate building your new venture, so we've made getting you online as easy as we can. 
				</p>
				<p>
				We're really happy that you've chosen to use CartShop and this is where we can start to make your life easier.   	
				</p>
				<br/>
				<p>
				Watch our tutorial or read on......	
				</p>
				<br/>
				<p>
				Here's how to get started in 5 easy steps:
				</p>
				<br/>
				<ul>
					<li>
						<p>	To get set up, just click the sign up button on our home page, create a user ID and password and you'll be taken to our business details page where you can add the details and logo that will be displayed on the unique cart shop page for your business. </p>
						<br/>
						<p>Your unique business page URL will be displayed which you can then add to your social media or send to your customers.</p>
					</li>
					<li>
					You'll receive a separate secure email to provide us with details of your bank account to make payments to, which is safely and securely hosted by our partners at Stripe.
					</li>
					<li>
					To add products (as many as you like), fill in the product update section and your product will appear at the bottom of the page ready to be published.  
					</li>
					<li>
					Click publish, once you've done this you'll be sent to your unique page showing your business details and any products you're selling.  You can edit your details at any time by pressing the edit button.	
					</li>
				</ul>
				<br/>
				<p>
				Your page is now ready for your customers!
				</p>
				<br/>
				<p>
				As an added benefit, your site page can also act as an inventory to track your stock levels.  Our interactive database will keep track of purchases as they take place and adjust your stock levels so that you can keep on eye on things in real time. 
				</p>
				<br/>
				<p>
				Customer purchase notifications and details will be sent to you by email to fulfil orders and funds will be automatically credited to your bank account via Stripe. 
				</p>
			</section>
			<section>
				<YouTube
					className={video}
					video={getId('https://youtu.be/di4KLmuvOxA')}
				/>
			</section>
			<section className={mission}>
				<h2 className={subheading}>We're here to help</h2>
				<p>
				If you have any questions at all, just drop us an email at help@cartshop.co.uk and we'll get right back to you.
				</p>
			</section>
		</div>
	);
}
export default Tutorial;
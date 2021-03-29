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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<p>
					nulla facilisi cras fermentum odio eu feugiat pretium nibh
					ipsum consequat nisl vel pretium lectus quam id leo in vitae
					turpis massa sed elementum tempus egestas sed sed risus
					pretium
				</p>
			</section>
			<section className={mission}>
				<h2 className={subheading}>Why we do it</h2>
				<p>
					quisque non tellus orci ac auctor augue mauris augue neque
					gravida in fermentum et sollicitudin ac orci phasellus
					egestas tellus rutrum tellus pellentesque eu tincidunt
					tortor aliquam nulla facilisi cras:
				</p>
				<ul>
					<li>Simple</li>
					<li>Free</li>
					<li>Macrame-friendly</li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</section>
		</div>
	);
}

export default About;

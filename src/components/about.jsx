import "./about.css";
import { useEffect } from "react";
import gsap from "gsap";

const AboutSection = () => {
	useEffect(() => {
		const tl = gsap.timeline();

		tl.to("#about-heading", {
			scrollTrigger: "#about-heading",
			opacity: 1,
			duration: 1.5,
			delay: 2,
		})
			.from("#about-heading", {
				scrollTrigger: "#about-heading",
				x: -100,
				duration: 1.5,
				delay: -1.5,
			})
			.to("#about-content", {
				scrollTrigger: "#about-content",
				opacity: 1,
				duration: 1.5,
				delay: -1,
			})
			.from("#about-content", {
				scrollTrigger: "#about-content",
				x: -100,
				duration: 1.5,
				delay: -1.5,
			});
	}, []);

	return (
		<section className="about" id="about">
			<header>
				<h2 className="heading" id="about-heading">
					About Me
				</h2>
			</header>
			<main>
				<p className="text" id="about-content">
					I'm glad destiny brought you to my page. I'm Srinivas, a second year
					undergraduate student at Vellore institute of technology. I am from
					Hydreabad and I'm obsessed with Amazon Web Services (AWS). I like
					finance, marketing, and I am a full time Linux User. I started my
					journey with at the age of 15, and it has been a wonderful experience
					since then. Welcome, keep exploring, maybe you'll find something
					interesting and if you have any questions don't hesitate to reach out.
					Hope this page serves you well.
				</p>
			</main>
		</section>
	);
};

export default AboutSection;

import "./App.css";

import LandingSection from "./components/landing";
import AboutSection from "./components/about";
import SkillsSection from "./components/skills";

const App = () => {
	return (
		<main>
			<LandingSection />
			<AboutSection />
			<SkillsSection />
		</main>
	);
};

export default App;

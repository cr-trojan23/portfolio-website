import "./App.css";

import LandingSection from "./components/landing";
import AboutSection from "./components/about";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/projects";

const App = () => {
	return (
		<main>
			<LandingSection />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
		</main>
	);
};

export default App;

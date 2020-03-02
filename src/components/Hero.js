import React from "react";

export default function Hero({ children, hero }) {
	//Hero parameter lets you change the class of each hero with the "hero" input
	return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
	hero: "defaultHero"
};

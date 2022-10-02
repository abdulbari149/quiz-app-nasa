import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
	return (
		<footer className="bck_black" style={{ marginTop: "100px" }}>
			<Fade delay={500}>
				<div className="font_righteous footer_logo_venue">
					James Webb Quiz App
				</div>
				<div className="footer_copyright">Made for NASA Apps Challenge</div>
			</Fade>
		</footer>
	);
};

export default Footer;

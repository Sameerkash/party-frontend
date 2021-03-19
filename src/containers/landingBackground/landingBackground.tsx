import * as React from "react";
import "./landingBackground.css";

type Props = {
  children?: React.ReactNode[];
};

const LandingBackground: React.FC<Props> = ({ children }) => {
  return <div className="landing-background">{children}</div>;
};

export default LandingBackground;

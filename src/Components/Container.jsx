import Personal from "./Personal";
import Professional from "./Professional";
import WorkEx from "./WorkEx";
import Education from "./Education";
import Skill from "./Skill";
import EntireCv from "./EntireCv";
import '../App.css'

function Container() {
  return (
    <>
      <header>CV Builder</header>
      <div style={{display:'flex'}} className="container">
        <div className="left">
          <Personal />
          <Professional />
          <WorkEx />
          <Skill />
          <Education />
        </div>
        <div className="right">
          <EntireCv />
        </div>
      </div>
    </>
  );
}

export default Container;

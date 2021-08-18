import React from "react";

const Main = () => {
  return (
    <div className="main-section" id="main">
      <div className="body">
        <div className="wrapper">
          <div className="static-txt">I'm a</div>
          <ul className="dynamic-txts">
            <li>
              <span>Cat Lover</span>
            </li>
            <li>
              <span>Developer</span>
            </li>
            <li>
              <span>Designer</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;

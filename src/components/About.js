import React from "react";

export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });
//   const [btntext, setBtnText] = useState("Enable Dark Mode");
//   let handleDarkMode = () => {
//     if (myStyle.color === "black") {
//       setMyStyle({ color: "white", backgroundColor: "black" });
//       setBtnText("Enable Light Mode");
//     } else {
//       setMyStyle({ color: "black", backgroundColor: "white" });
//       setBtnText("Enable Dark Mode");
//     }
//   };

  return (
    <div className="container" style={props.mode==='dark'?{color: "white", backgroundColor: "#333333"}:{color: "#333333", backgroundColor: "white"}}>
      <h1 className="my-3">About US</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={props.mode==='dark'?{color: "white", backgroundColor: "#333333"}:{color: "#333333", backgroundColor: "white"}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={props.mode==='dark'?{color: "white", backgroundColor: "#333333"}:{color: "#333333", backgroundColor: "white"}}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.mode==='dark'?{color: "white", backgroundColor: "#333333"}:{color: "#333333", backgroundColor: "white"}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={props.mode==='dark'?{color: "white", backgroundColor: "#333333"}:{color: "#333333", backgroundColor: "white"}}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.mode==='dark'?{color: "white", backgroundColor: "#333333"}:{color: "#333333", backgroundColor: "white"}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={props.mode==='dark'?{color: "white", backgroundColor: "#333333"}:{color: "#333333", backgroundColor: "white"}}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={props.toggleMode}>Mode Change</button>
    </div>
  );
}

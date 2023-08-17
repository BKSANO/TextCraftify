import React from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode==="dark"?"white":"#333333",
    backgroundColor: props.mode==="dark"?"#333333":"white"
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About US</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={myStyle}
            >
              <strong>Description</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
            <p dir="auto"><strong>Introducing "TextCraftify" - Your Ultimate Text Utility React App</strong></p>
            <p dir="auto">TextCraftify is a cutting-edge React.js application designed to empower users with a versatile suite of text manipulation tools, catering to a wide range of needs. Whether you're a writer, programmer, student, or professional, TextCraftify simplifies and enhances your text-related tasks with its user-friendly interface and robust functionality.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={myStyle}
            >
              <strong>Features</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
            <p dir="auto"><strong>Text Formatting:</strong> Easily format your text with options for bold, italics, underline, bullet points, and headings. Ensure your content stands out and is well-organized.</p>
            <p dir="auto"><strong>Word Count and Character Count:</strong> Instantly analyze your text's length with accurate word and character counting. Great for meeting word limits or checking readability.</p>
            <p dir="auto"><strong>Case Conversion:</strong> Convert text to uppercase, lowercase, title case, or sentence case effortlessly. No more manual retyping to adjust text capitalization.</p>
            <p dir="auto"><strong>Find and Replace:</strong> Locate specific words or phrases within your text and replace them with alternatives. Perfect for quick content editing and corrections.</p>
            <p dir="auto"><strong>Lorem Ipsum Generator:</strong> Generate placeholder text for your design projects with customizable word counts and paragraph numbers. Ideal for mock-ups and prototypes.</p>
            <p dir="auto"><strong>Text Sorting:</strong> Arrange lines of text in ascending or descending order. Useful for alphabetizing lists or organizing data.</p>
            <p dir="auto"><strong>Text Encoding/Decoding:</strong> Encode and decode text in various formats such as Base64, URL encoding, and HTML entities. Ensure data integrity during transmission.</p>
            <p dir="auto"><strong>Text Statistics:</strong> Gain insights into your text by analyzing the occurrence of each word. Discover the most common words and tailor your content accordingly.</p>
            <p dir="auto"><strong>Line and Word Removal:</strong> Remove specific lines or words from your text. Ideal for eliminating unwanted content or duplicates.</p>
            <p dir="auto"><strong>Text Diff Tool:</strong> Compare two sets of text and identify the differences between them. Perfect for tracking changes in documents or code.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={myStyle}
            >
              <strong> Why TextCraftify?</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
            <p dir="auto"><strong>User-Centric Design:</strong> TextCraftify boasts an intuitive user interface that makes text manipulation easy and accessible for users of all levels of tech-savviness.</p>
            <p dir="auto"><strong>Real-Time Preview:</strong> Most functions provide a real-time preview of the changes, helping you make informed decisions before applying them.</p>
            <p dir="auto"><strong>Responsive and Cross-Platform:</strong> Access TextCraftify from any device, be it a desktop, tablet, or smartphone. Enjoy seamless functionality across different platforms.</p>
            <p dir="auto"><strong>Privacy-Focused:</strong> TextCraftify respects your privacy. No text is stored, ensuring your sensitive information remains confidential.</p>
            <p dir="auto"><strong>Regular Updates:</strong> Our dedicated development team consistently adds new features and refines existing ones to keep TextCraftify at the forefront of text utility tools.</p>
            <p dir="auto">Enhance your productivity and streamline your text-related tasks with the powerful capabilities of TextCraftify. Discover the ease and efficiency of managing text like never before. Try TextCraftify today and transform the way you interact with text!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

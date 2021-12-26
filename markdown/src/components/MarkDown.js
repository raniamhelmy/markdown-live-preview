import React ,{useState} from "react";
import Container from 'react-bootstrap/Container'
import {useGlobalContext} from "../context/DataContext"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MarkDown.css"
import {marked} from 'marked'
import * as SiIcons from "react-icons/si"
import * as CgIcons from "react-icons/cg"


function MarkDown() {
  const placeholder = `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
   > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![React Logo w/ Text](https://techinfini.in/wp-content/uploads/2017/09/React-Logo-1.png)`;
  
    const [mark, setMark] = useState(placeholder);
  
    const { editorMax, setEditorMaxMax, previewMax, setPreviewMax } =
      useGlobalContext();
  
    const classes = editorMax
      ? ['editorWrap maximized', 'previewWrap hide', <CgIcons.CgMaximizeAlt />]
      : previewMax
      ? ['editorWrap hide', 'previewWrap maximized', <CgIcons.CgMaximizeAlt />]
      : ['editorWrap', 'previewWrap', <CgIcons.CgMinimizeAlt />];
  
    const handleChange = (event) => {
      setMark(event.target.value);
    };
  
    const markdownValue = marked(mark, { breaks: true });
    return (
      <>
        <Container fluid className="p-3 mr-auto mt-4">
          <div className="header">
            <h1 className="text-center">Markdown Live Preview</h1>
            <hr />
          </div>
  
          <Row >
            <Col xs={12} className={classes[0]}>
              <div className="toolbar-container">
                <div className="right-div">
                  <h4 className="text-left"><SiIcons.SiFreecodecamp /> Editor </h4>
                </div>
                <div className="right-c" onClick={() => setEditorMaxMax(!editorMax)}>
                  {editorMax ? (
                    <CgIcons.CgMinimizeAlt />
                  ) : (
                    <CgIcons.CgMaximizeAlt />
                  )}
                </div>
              </div>
  
              <textarea
                className="form-control p-2 mb-5"
                value={mark}
                id="editor"
                onChange={handleChange}
              />
            </Col>
            
  
            <div className="converter" />
  
            <Col xs={12} className={classes[1]}>
              <Row className="toolbar-container">
                <div className="right-div">
                  <h4 className="text-left"><SiIcons.SiFreecodecamp /> Result </h4>
                </div>
                <div
                  className="right-c" onClick={() => setPreviewMax(!previewMax)}>
                  {previewMax ? (
                    <CgIcons.CgMinimizeAlt />
                  ) : (
                    <CgIcons.CgMaximizeAlt />
                  )}
                </div>
              </Row>
              <div id="preview" className="preview mt-4 p-2" dangerouslySetInnerHTML={{ __html: markdownValue }}></div>
            </Col>
           </Row>
        </Container>
      </>
    );
  }
  
  export default MarkDown;
  
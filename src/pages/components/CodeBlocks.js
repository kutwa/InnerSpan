import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter/dist/cjs';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

const kod = `import React, { useEffect } from "react";
import CodeBlocks from "./components/CodeBlocks.js";

const Main = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="home-container">
            <div className="home-info-container">
                <h1>InnerSpan Solutions: Crafting Seamless Digital Experiences</h1>
                <p>
                    <i>"Innovate, Create, Inspire"</i>
                </p>
            </div>
            <div className="home-info-container">
                <CodeBlocks/>
            </div>
        </div>
    );
}

export default Main;`

const CodeBlocks = () => (
  <div className="code-container">
    <SyntaxHighlighter language="javascript" style={a11yDark} > 
      {kod}
    </SyntaxHighlighter>
  </div>
);

export default CodeBlocks;
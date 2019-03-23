import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import React from "react";
import "./style.css";
import { LineNo, Pre } from "./styles";
const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim();
export default function Snippets() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <article className="media content-section">
            <div className="media-body">
              <div className="article-metadata">
                <img
                  src="favicon.ico"
                  alt="alaa"
                  className="rounded-circle article-img"
                />
                <a className="mr-2" href="/">
                  Alaa Al Shammari
                </a>
                <small className="text-muted mr-2">Mar,22 2019</small>
              </div>
              <h2>
                <a className="article-title" href="/">
                  JAVASCRIPT SNIPPET
                </a>
              </h2>
              <p className="desc">printing out hello world</p>
              <Highlight
                {...defaultProps}
                theme={theme}
                code={exampleCode}
                language="jsx"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps
                }) => (
                  <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        <LineNo>{i + 1}</LineNo>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </Pre>
                )}
              </Highlight>
              <small className="text-muted md-3">
                written with : javascript
              </small>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <div className="content-section">
            <h3>Snippets that matter</h3>
            <p className="text-muted">all the lectures for this bootcamp</p>
            <ul className="list-group">
              <li className="list-group-item list-group-item-light">
                Latest Posts
              </li>
              <li className="list-group-item list-group-item-light">
                JAVASCRIPT
              </li>
              <li className="list-group-item list-group-item-light">CSS</li>
              <li className="list-group-item list-group-item-light">HTML</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

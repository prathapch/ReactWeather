var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-centered page-title">Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to="/?location=Mumbai">Mumbai, MH</Link>
      </li>
      <li>
        <Link to="/?location=Chennai">Chennai, TN</Link>
      </li>
    </ol>
  </div>
  );
};

module.exports = Examples;

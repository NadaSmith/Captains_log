// views/New.jsx
const React = require('react');
const Layout = require('./Layout'); 

function New() {
  return (
    <Layout>
      <h2>Create a New Log</h2>
      <form action="/logs" method="POST">
        <label>Title: <input type="text" name="title" /></label><br />
        <label>Entry: <textarea name="entry"></textarea></label><br />
        <label>Is the ship broken? <input type="checkbox" name="shipIsBroken" /></label><br />
        <input type="submit" value="Create Log" />
      </form>
    </Layout>
  );
}

module.exports = New;
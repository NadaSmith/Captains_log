const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Snacks Website</title>
    {/* Milligram CSS for Some Default Styling */}
    {/* Google Fonts */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
    />

    {/* CSS Reset */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
    />

    {/* Milligram CSS */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />

    {/* Jquery */}
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" type="text/css" href="./public/style.css" />
    {/* OUR CSS AND JS */}
  </head>
  <body>
    <nav>
        <a href='/flight'>All FLIGHTS</a>
        <a href='/flight/new'>ADD FlIGHTS</a>
    </nav>

    <header>
      <h1>The Flights App</h1>
    </header>

    <main>
        {this.props.children}
    </main>

    <footer></footer>
  </body>
</html>
        )
    }
}

module.exports = Layout;
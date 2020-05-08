import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from './components/Root';

const render = () => ReactDOMServer.renderToString(
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' name='viewport' content='width=device-width, initial-scale=1' />
      <title>Wob</title>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' integrity='sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ' crossOrigin='anonymous' />
      <link rel='stylesheet' href='app.css' />
    </head>
    <body>
      <Root isBuild={true} />
      <script src='bundle.js' />
    </body>
  </html>,
);

export default render;

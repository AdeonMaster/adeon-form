# Description

A lightweight `create-react-app` alternative for typical React project (React.js, Redux, Redux Sagas, Reselect, Ramda.js and etc.)

# Installation

- Clone repo to your working directory
- Install required packages with `npm i`
- Build app with `npm run build` or `npm run dev`
- Run app locally with `npm run server`
- Install `ca.ssl.indexnl.com.crt` certificate inside `server/cert` folder in order to use SSL on your localhost (See the [detailed installation guide for Windows users](#ssl-certificate-installation-detailed-guide-for-windows))

# SSL certificate installation detailed guide for Windows
- Navigate to `server/cert` folder inside app working directory
- Double click on `ca.ssl.indexnl.com.crt` certificate file
- Press `Install Certificate` button
- Select certificate store location and press `Next` (can be skipped by default)
- Select `Place all certificates in the following store` and press `Browse` button
- In the opened window select `Trusted Root Certification Authorities` and press `Ok`
- Make sure `Trusted Root Certification Authorities` appeared in certificate store input field and press `Next`
- In the newly opened window press `Finish` button
- After successful installation close all browser instances in order the new settings take effect

# Recommendations

- Keep deps "up to date"
- Optimize newly added deps with `babel-plugin-transform-imports` (See [examples](https://www.npmjs.com/package/babel-plugin-transform-imports))

# Issues

- Server: Requesting a non static asset file cause to return index.html document instead of 404 error

# TO DO

- Migrate to eslint v6.0.0

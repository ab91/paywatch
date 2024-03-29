# Paywatch Commission Dashboard (Last Updated materially 2020)

Paywatch is a commission and income-tracking app that helps salespeople monitor their earnings. Users can monitor weekly and monthly income, identify trends, and set and exceed goals in Paywatch.

Read a postmortem of this project on Medium: [The Full Stack React App: A Front-End Postmortem](https://yallcantspell.medium.com/paywatch-mvp-a-postmortem-14f1b8b6596a)

## Appearance

<p align="center">
  <img src="https://res.cloudinary.com/ab91/image/upload/v1592354165/Portfolio%20New/paywatch_demo.gif" alt="Paywatch Gif"/>
</p>

## Features
- Log hours and income via "select" and "text" inputs, see Data Visualization adjust according to input
- Click "More Quotes" to make a call to the Quotes API and see quotes
- Dark Mode
- Milestones (a pretty to do list)

## Local Installation

To run locally, first install the necessary dependencies

```bash
npm install
```

Then, run the start script

```bash
npm start
```

Paywatch will be running at localhost:8000

## Technology

Paywatch is built with the following technologies:

- [React](http://reactjs.org) - Used as front-end framework
- [Redux](https://redux.js.org) - Used for state library
- [styled-components](https://styled-components.com/) - Used for styling
- [Pose](https://popmotion.io/pose/) - Used for animations
- [Victory](https://formidable.com/open-source/victory/) - Used for data visualization
- [Cloudinary](https://cloudinary.com/) - Used for image storage

## Gallery

<p align="center">
  <img src="https://res.cloudinary.com/ab91/image/upload/v1592349278/Payment%20App/Paywatch_Gallery.png" alt="Paywatch Gallery image"/>
</p>

## UI/UX

The Paywatch design is based around [Bhavna Kashyap's](https://dribbble.com/bhavnakashyap) dribble designs, which I significantly re-designed. Sketch Cloud file [here](https://sketch.cloud/s/jpzOD).

Quote component graphic by herydego_art.

## Licensing

The code in this project is [MIT Licensed](https://github.com/ab-kokiri/paywatch/blob/master/LICENSE.md).

/*Props are arguments passed into React components.

Props are passed to components via HTML attributes.

props stands for properties.
Props are also how you pass data from one component to another, as parameters
*/
import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import "./index.css";

ReactDOM.render(
  <>
  <Cards
  card_image="https://i0.wp.com/rafaelnadalfans.com/wp-content/uploads/2015/11/rafael-nadal-too-good-for-lukas-rosol-in-paris-opener-7.jpg"
  category="Tennis"
  title="Nadal"
  link="https://www.biography.com/athlete/rafael-nadal"
  />


  <Cards
  card_image="https://gifimage.net/wp-content/uploads/2017/08/rocket-league-gif-1.gif"
  category="e sports"
  title="ATOMIC"
  link="https://www.esports.net/news/best-rocket-league-players/"
  />


  <Cards
  card_image="https://images5.alphacoders.com/962/thumb-1920-962316.jpg"
  category="Soccer"
  title="Lionel Messi"
  link="https://www.espn.com/soccer/player/_/id/45843/lionel-messi"
  />


  <Cards
  card_image="https://www.nj.com/resizer/G4O9nCAciAgY_Q8I8lpZUMUHxL4=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/yankees_main/photo/roger-clemens-0821jpgjpg-43a5690f7ec31030.jpg"
  category="Baseball"
  title="Roger Clemens"
  link="https://www.baseball-reference.com/players/c/clemero02.shtml"
  />


<Cards
  card_image="https://www.theballzone.com/wp-content/uploads/2018/11/Tom-Brady.jpg"
  category="Football"
  title="Tom Brady"
  link="https://www.celebritynetworth.com/richest-athletes/nfl/tom-brady-net-worth/"
  />
  </>,
  document.getElementById("root"));
import React, { Component } from "react";
// import reference to Header file containing navigation bar
import Header from "./Header.js";

class About extends Component {
  render() {
    return (
      // div wrapping all page elements
      <div className="About">
        {/* element to render navigation bar at top of page */}
        <Header />
        {/* div container wrapping three text containers */}
        <div className="container">
          {/* div to wrap all three text containers in one row split in three columns */}
          <div className="row">
            {/* div containing first column */}
            <div className="col-sm">
              <h1>Team Introduction</h1>
              Our team had met each other for the first time in September and we
              all bonded over the initial difficulty of CS620. We started a
              whatsApp group to help each other and when the time came to form a
              group for this project we were already ready. The comradery
              between us while putting this project together made it a less
              daunting experience. We were able to bounce of each other and
              utilize each individuals strengths to achieve a common goal and an
              end product we could all be proud of. We all have a affinity for
              playing games, from board games to video games and physical sports
              too. So when the oppurtuiunty arose to create something fun we
              jumped at it.
            </div>
            {/* div containing second column */}
            <div className="col-sm2">
              <h1>Rules of Game</h1>
              The basic rules of the game involve drawing cards in order to get
              as close to, but not over 21. The entire deck is shuffled before
              any cards are drawn, and cards are drawn one at a time. This game
              can be played with multiple players but only ever one dealer. The
              player must "stand" in order to validate thier turn and save thier
              hand.
            </div>
            {/* div containing third column */}
            <div className="col-sm3">
              <h1>History of Game</h1>
              The origins of the game is still up for debate. Some say it was
              invented by the Romans, others say it stems from a game played by
              the French in the 16th century going by the name 'vingt-et-un' or
              twenty-one (in english). The rapid expansion of the games
              popularity can nearly be wholly attributed to French colonists who
              brought thier games and culture to the shores of North America in
              the 17th and 18th centuries. The term 'BlackJack' was coined in
              early gambling halls in the U.S where certain promoters offered an
              increased payout if a black jack (the jack of spades/clubs) was
              drawn alongside an Ace on the first draw.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;

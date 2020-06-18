import React from "react";

 class Content extends React.Component {

  state = {
  test: [<div><img src="https://de.web.img3.acsta.net/newsv7/19/04/18/12/56/4254644.jpg" alt="" /> <h6>THIS IS IRON MAN</h6> </div>,
  <div><img src="https://www.filmfutter.com/wp-content/uploads/2013/04/IronMan3front1-696x385.jpg" alt=""/><h6>IRON MAN 2</h6></div>,
  <img src="https://www.filmfutter.com/wp-content/uploads/2020/01/RobertDowneyJrIronMan-696x384.jpg" alt=""/>,
  <img src="https://www.turn-on.de/media/cache/article_images/media/cms/2018/04/Captain-America-in-Avengers-Infinity-War-Disney.jpg?994189" alt=""/>,
  <img src="https://assets.cdn.moviepilot.de/files/d2c55307714a5679666d063d70f75f6a48801acc03a8e28050114d6bc9cc/fill/992/477/thor.jpg" alt=""/>],
    index:0
  };

  handleClick = () => {
    let i = this.state.index < this.state.test.length ? this.state.index +1 : 0;
    this.setState({ index: i });
  };

  render() {
    return (
      <div>
        <img src="https://www.pcgames.de/screenshots/original/2019/03/Avengers-Endgame-Poster-pc-games1.jpg" alt="" /> <h6>THIS IS THE AVENGERS</h6>
        {this.state.test.slice(0, this.state.index).map(item => {
          return (
            <div>{item}</div>
          );
        })}
        
        <button onClick={this.handleClick} style={{background:"green"}}>Next Picture</button>
      </div>
    );
  }
}
export default Content
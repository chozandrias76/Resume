import React, {Component} from 'react';


class IndexComponent extends Component {

  // var imageObject = function imageObject(url, text){
  //   return <div id="cover-image" style={{
  //     backgroundImage: `url(${url})`
  //   }}>
  //     <div id="overlay">
  //       <span id="text-overlay">${text}</span>
  //     </div>
  //   </div>;
  // };
  //
  // var testImageObject = new imageObject("www.google.com", "fuck");
  // console.log(testImageObject);

  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css"/> {/* Source Image  https://www.artstation.com/artwork/50JvP*/}

        <div id="content">
          <div className="container">
            <section className="first-section">
              <div className="row">
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569708963b0be3f9ce875be0/1452738819808/Render+07.png?format=750w")'
                }}>
                  <div id="overlay">
                    <span id="text-overlay">REGILO</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569707b00e4c119a540baff5/1452738538984/Usability+Final.png?format=750w")'
                }}>
                  <div id="overlay">
                    <span id="text-overlay">SAMXA'E</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569706e4df40f306cad901e1/1452738288707/_MG_1197.jpg?format=750w")'
                }}>
                  <div id="overlay">
                    <span id="text-overlay">HELLBOY PACKAGE DESIGN</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/569706384bf118ce98c78a8c/1452738156214/Cutaway.127.png?format=750w")'
                }}>
                  <div id="overlay">
                    <span id="text-overlay">THE RO</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/5760ee02e707eb1822a13d8b/1465970186124/20150519_203927.jpg?format=500w")'
                }}>
                  <div id="overlay">
                    <span id="text-overlay">STEAMER REDESIGN</span>
                  </div>
                </div>
                <div id="cover-image" style={{
                  backgroundImage: 'url("https://static1.squarespace.com/static/56665a0857eb8dd2594cdf8e/t/5760e9d627d4bdcb665722d8/1465969229638/Camp+Stove+Redesign+04+Paint.png?format=750w")'
                }}>
                  <div id="overlay">
                    <span id="text-overlay">GRILL TEK</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
    // return (
    //   <section>
    //     <h2>react-webpack-boilerplate</h2>
    //     <ul ref="indexList" className="index-list">
    //       {this.props.items.map((item, index) => {
    //         return (<li key={index}>item {item}</li>);
    //       })}
    //     </ul>
    //   </section>
    // );

  }
}

IndexComponent.defaultProps = {
  items: []
};

export default IndexComponent;

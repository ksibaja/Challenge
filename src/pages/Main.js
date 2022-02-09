import React from "react";
import Container from "react-bootstrap/Container";
import CardValue from "../components/CardValue";
import "./styles/pages.css";

class Main extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: "COMMITMENT",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://i.pinimg.com/originals/5a/ac/3f/5aac3fb9d746147104428b10fe28eda6.jpg",
      },
      {
        id: 2,
        title: "CONSISTENCY",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://wallpapercave.com/wp/wp1905915.jpg",
      },
      {
        id: 3,
        title: "LEADERSHIP",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://ae01.alicdn.com/kf/HTB1I_x_OpXXXXXSaFXXq6xXFXXX2/14-5cm-5-3cm-Fighter-Jet-Vinyl-Cartoon-Car-Styling-Stickers-Motorcycle-Black-Silver-S3-4546.jpg",
      },
      {
        id: 1,
        title: "LOYALTY",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://i.pinimg.com/originals/5a/ac/3f/5aac3fb9d746147104428b10fe28eda6.jpg",
      },
      {
        id: 2,
        title: "TEAM WORK",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://wallpapercave.com/wp/wp1905915.jpg",
      },
      {
        id: 3,
        title: "TRANSPARENCY",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://ae01.alicdn.com/kf/HTB1I_x_OpXXXXXSaFXXq6xXFXXX2/14-5cm-5-3cm-Fighter-Jet-Vinyl-Cartoon-Car-Styling-Stickers-Motorcycle-Black-Silver-S3-4546.jpg",
      },
      {
        id: 1,
        title: "LOYALTY",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://i.pinimg.com/originals/5a/ac/3f/5aac3fb9d746147104428b10fe28eda6.jpg",
      },
      {
        id: 2,
        title: "TEAM WORK",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://wallpapercave.com/wp/wp1905915.jpg",
      },
      {
        id: 3,
        title: "TRANSPARENCY",
        description:
          "This is a car... This is a car... This is a car... This is a car... This is a car... This is a car... This is a car...",
        img: "https://ae01.alicdn.com/kf/HTB1I_x_OpXXXXXSaFXXq6xXFXXX2/14-5cm-5-3cm-Fighter-Jet-Vinyl-Cartoon-Car-Styling-Stickers-Motorcycle-Black-Silver-S3-4546.jpg",
      },
    ],
  };

  handleClick = () => {
    console.log("Hello, you clicked the button...");
    alert("Hello, you clicked the button...");
  };

  render() {
    return (
      <Container>
        <div className="text-center">
          <h1>VALUES</h1>
        </div>

        <div className="row col-md-7 m-auto">
          {this.state.data.map((item) => {
            return (
              <div key={item.id} className="col col-md-6 m-auto">
                <CardValue
                  title={item.title}
                  description={item.description}
                  image={item.img}
                />
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Main;

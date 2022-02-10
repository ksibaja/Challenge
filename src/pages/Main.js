import React from "react";
import Container from "react-bootstrap/Container";
import ValuesCard from "../components/ValuesCard";
import Topnavbar from "../components/Topnavbar";
import "./styles/Main.css";
import Loading from "../components/Loading";

class Main extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: "Commitment",
        description:
          "It is the essential foundation of what our company is built on. Dedication to the success of our customers and partners builds trust and inspires the pack to go above and beyond.",
        img: "https://snowsoftwaresolutions.com/img/icons/Values/Compromiso1.png",
      },
      {
        id: 2,
        title: "Consistency",
        description:
          "Our culture of consistency is paramount and noticeable throughout all services. Consistent customer experiences in turn build customer loyalty",
        img: "https://snowsoftwaresolutions.com/img/icons/Values/Constancy1.png",
      },
      {
        id: 3,
        title: "LeaderShip",
        description:
          " It works as the catalyst that fuels the pack to set and achieve challenging goals.",
        img: "https://snowsoftwaresolutions.com/img/icons/Values/LeaderShip1.png",
      },
      {
        id: 4,
        title: "Loyalty",
        description:
          "Our team reflects devotion to our organizational commitment: mission, vision and core values.",
        img: "https://snowsoftwaresolutions.com/img/icons/Values/loyalty1.png",
      },
      {
        id: 5,
        title: "Team Work",
        description:
          "It is our DNA. The pack works as one; every wolf brings the best of their talent to achieve mutual goals regardless of job positions.",
        img: "https://snowsoftwaresolutions.com/img/icons/Values/Teamwork1.png",
      },
      {
        id: 6,
        title: "Transparency",
        description:
          "Clear communication channels build confidence when developing relationships with our customers, partners and collaborators.",
        img: "https://snowsoftwaresolutions.com/img/icons/Values/Transparencia1.png",
      },
    ],
    loading: true,
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div>
        <Topnavbar />
        <Container id="container">
          <div className="text-center">
            <h3>Values</h3>
          </div>
          <br></br>

          <div className="row col-md-10 m-auto">
            {this.state.data.map((item) => {
              return (
                <div key={item.id} className="col-lg-4 col-md-6" id="v-card">
                  <ValuesCard
                    title={item.title}
                    description={item.description}
                    image={item.img}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default Main;

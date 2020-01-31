import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Slayders from "./components/slayders/slayders";
import Info from "./components/info/info";
import PushI from "./components/pushI/pushI";
import Menu from "./components/menu/menu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      statusSlayder: 1,
      slayders: [1, 2, 3],
      activI: false
    };
  }
  componentDidMount() {
    this.getSlayders();
  }

  getSlayders = i => {
    if (i === 1) {
      this.setState({
        slayders: [1, 2, 3],
        statusSlayder: 1
      });
    }

    if (i === 2) {
      this.setState({
        slayders: [4, 5, 6],
        statusSlayder: 2
      });
    }

    if (i === 3) {
      this.setState({
        slayders: [7, 8, 9],
        statusSlayder: 3
      });
    }
  };

  onActiveI = () => {
    const { activI } = this.state;
    if (!activI) {
      this.setState({ activI: true });
    }
  };
  offActiveI = () => {
    const { activI } = this.state;
    if (activI) {
      this.setState({ activI: false });
    }
  };
  getMenu = () => {
    const { open } = this.state;
    if (open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  };

  render() {
    const { slayders, statusSlayder, activI, open } = this.state;
    return (
      <div className="main">
        <Header getMenu={this.getMenu} open={open} />
        <article className="content">
          {open ? <Menu /> : null}
          {activI ? <PushI offActiveI={this.offActiveI} /> : null}
          <Slayders slayders={slayders} />
          <Info
            getSlayders={this.getSlayders}
            statusSlayder={statusSlayder}
            onActiveI={this.onActiveI}
          />
        </article>
        <Footer />
      </div>
    );
  }
}
export default App;

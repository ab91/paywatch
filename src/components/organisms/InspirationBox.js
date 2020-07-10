import React, { Component } from "react";

import styled from "styled-components";
import ReactLoading from "react-loading";

import GenericButton from "../buttons/GenericButton";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;

  width: 780px;
  height: 200px;
  background-color: rgba(102, 139, 251, 0.13);
  margin 10px 0 20px 0;

  position: relative;
`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 31px;
`;

const Quote = styled.p`
  font-family: Muli;
  color: ${props => props.theme.inspbox};
  font-size: 15px;
  height: 60px;
  margin: 0;
`;

const IllDiv = {
  position: "absolute",
  overflow: "hidden",
  right: "0",
  height: "100%"
};

const Illustration = styled.img``;

const LoadingStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const API = "https://type.fit/api/quotes";

class InspirationBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isVisible: false,
      loading: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);

    this.fetchData();
  }

  fetchData = () => {
    const that = this;
    this.setState({ loading: !this.state.loading });

    let randomInt = Math.floor(Math.random() * 1642);

    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data: data[randomInt] }))
      .then(function() {
        that.setState({ loading: !that.state.loading });
      });
  };

  render() {
    return (
      <>
        <Grid>
          <Flexbox>
            {this.state.loading ? (
              <div style={LoadingStyle} className="here">
                <ReactLoading type="spin" color="#5564A0" width={60} />
              </div>
            ) : (
              <Quote>
                <i>"{this.state.data.text}"</i> -{" "}
                {this.state.data.author == null
                  ? "Unknown"
                  : this.state.data.author}
              </Quote>
            )}
            <div onClick={this.fetchData} data-cy="inspobtn">
              <GenericButton color="#6672FB" label="More Quotes" />
            </div>
          </Flexbox>
          <div style={IllDiv}>
            <Illustration
              src={
                "https://res.cloudinary.com/ab91/image/upload/c_scale,h_200/v1586755745/Payment%20App/paywatch2b.png"
              }
            />
          </div>
        </Grid>
      </>
    );
  }
}

export default InspirationBox;

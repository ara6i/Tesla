import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Header from "./Header"
function Home() {
  return (
    <Container>
      <Header />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description=" Lowest Cost Solar Panels in America Order "
        backgroundImg="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Solar Roof"
        description="  Produce Clean Energy From Your Roof
        Order "
        backgroundImg="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Accessories"
        description="  Produce Clean Energy From Your Roof Order "
        backgroundImg="accessories.jpg"
        leftBtnText="shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

import React from "react";
import styled from "styled-components";

import Button from "./components/Button";
import Text from "./components/Text";

const MainApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <MainApp>
      <Text>
        {`A child asked his father, "How were people born?" So his father said, "Adam and Eve made
        babies, then their babies became adults and made babies, and so on." The child then went to
        his mother, asked her the same question and she told him, "We were monkeys then we evolved
        to become like we are now." The child ran back to his father and said, "You lied to me!" His
        father replied, "No, your mom was talking about her side of the family."`}
      </Text>
      <div>
        <Button textColor="white" bgColor="#2c7edb">
          This is funny!
        </Button>
        <Button textColor="white" bgColor="#29b363">
          This is not funny.
        </Button>
      </div>
    </MainApp>
  );
};

export default App;

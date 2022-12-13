import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "./components/Button";
import Text from "./components/Text";
import axiosClient from "./api/aixos";

const MainApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokes = async () => {
      const response = await axiosClient.get("/joke/all");
      setJokes(response.data);
    };

    getJokes();
  });

  return (
    <MainApp>
      <Text>{jokes.length === 0 ? "LOADING" : jokes[0].content}</Text>
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

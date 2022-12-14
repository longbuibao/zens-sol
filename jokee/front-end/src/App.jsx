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
  const [joke, setJoke] = useState();

  useEffect(() => {
    const getJoke = async () => {
      const response = await axiosClient.get("/joke", {
        withCredentials: true,
      });
      setJoke(response.data);
    };

    getJoke();
  }, []);

  return (
    <MainApp>
      <Text>
        {joke === undefined ? (
          <h5>LOADING...</h5>
        ) : Object.keys(joke).length === 0 ? (
          "That's all the jokes for today! Come back another day!"
        ) : (
          joke.content
        )}
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

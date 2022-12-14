import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "./components/Button";
import Text from "./components/Text";
import axiosClient from "./api/aixos";
import getCookie from "./utils/get-cookie";

const ACTION = {
  LIKE: true,
  DISLIKE: false,
};

const MainApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const App = () => {
  const [joke, setJoke] = useState();
  const [isEndJoke, setIsEndJoke] = useState(false);

  useEffect(() => {
    const getJoke = async () => {
      const response = await axiosClient.get("/joke", {
        withCredentials: true,
      });
      setJoke(response.data);
    };

    getJoke();
  }, []);

  useEffect(() => {
    if (joke && Object.keys(joke).length === 0) setIsEndJoke(true);
  }, [joke]);

  const voteHandler = async (joke, isLike) => {
    const userId = getCookie("userId");

    try {
      await axiosClient.post("/vote-joke", {
        joke,
        userId,
        isLike,
      });
    } catch (error) {
      console.log(error);
      return alert("something wrong");
    }
    const response = await axiosClient.get("/joke", {
      withCredentials: true,
    });
    setJoke(response.data);
  };

  return (
    <MainApp>
      <Text>
        {joke === undefined
          ? "LOADING..."
          : isEndJoke
          ? "That's all the jokes for today! Come back another day!"
          : joke.content}
      </Text>
      <div>
        <Button
          disabled={isEndJoke}
          textColor={isEndJoke ? "black" : "white"}
          bgColor={isEndJoke ? "#989c99" : "#2c7edb"}
          onClick={() => voteHandler(joke, ACTION.LIKE)}
        >
          This is funny!
        </Button>
        <Button
          disabled={isEndJoke}
          textColor={isEndJoke ? "black" : "white"}
          bgColor={isEndJoke ? "#989c99" : "#29b363"}
          onClick={() => voteHandler(joke, ACTION.DISLIKE)}
        >
          This is not funny.
        </Button>
      </div>
    </MainApp>
  );
};

export default App;

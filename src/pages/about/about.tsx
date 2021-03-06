import React, { FC } from "react";
import MainTemplate from "../../templates/mainTemplate";
import AboutView from "../../views/aboutView";

const QuizPage: FC = () => {
  return (
    <MainTemplate>
      <AboutView />
    </MainTemplate>
  );
};

export default QuizPage;

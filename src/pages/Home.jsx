import React, { useState, useEffect } from 'react';
import Questioniare from '../components/Questioniare';
import { useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const Home = () => {
  const [number, setNumber] = useState(29);
  const [attempted, setAttempted] = useState(false);
  const [numberOfAttempt, setNumberOfAttempt] = useState(0);
  const [correctIndex, setCorrectIndex] = useState();
  const [score, setScore] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const maxQuestion = Questioniare.length;
  const redirect = useNavigate();

  const handleChoice = (choice, correct, e, id) => {
    const next = document.getElementById('next');
    const submit = document.getElementById('submit');
    const validAnswer = document.getElementById(correctIndex);

    if (id < maxQuestion) {
      if (numberOfAttempt < 1 && !attempted) {
        if (choice === correct) {
          e.target.classList.add('success');
          setScore(score + 1);
          next.classList.remove('invisible');
        } else {
          e.target.classList.add('failure');
          validAnswer.classList.add('success');
          next.classList.remove('invisible');
        }
        setAttempted(true);
        setNumberOfAttempt(1);
      }
    }

    if (numberOfAttempt < 1 && !attempted) {
      if (choice === correct) {
        e.target.classList.add('success');
        setScore(score + 1);
        submit.classList.remove('invisible');
      } else {
        e.target.classList.add('failure');
        validAnswer.classList.add('success');
        submit.classList.remove('invisible');
      }
      setAttempted(true);
      setNumberOfAttempt(1);
    }
  };

  const handleNext = () => {
    setAttempted(false);
    setNumberOfAttempt(0);
    setNumber(number + 1);
    setCorrectIndex();
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      redirect('/quiz/submit');
      return { score };
    }, 4000);
  };

  useEffect(() => {
    const currentQuestion = Questioniare.find((question) => question.id === number);
    if (currentQuestion) {
      const correctIndex = currentQuestion.options.findIndex(
        (option) => option === currentQuestion.correctAnswer
      );
      setCorrectIndex(correctIndex);
    }
  }, [number]);

  useEffect(() => {
    Questioniare.forEach((q) => {
      shuffleArray(q.options);
    });
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <div className="py-4">
      <div className="py-6">
        <div className="container ">
          {isLoading ? (
            <div className="w-[300px] h-[400px] flex justify-center items-center">
              <BounceLoader color="white" size={35} />
            </div>
          ) : (
            <div>
              <div className="py-6">
                {Questioniare.filter((question) => number === question.id).map((question) => (
                  <div key={question.id} className="text-white flex flex-col gap-10">
                    <h1>
                      {question.id} / {Questioniare.length}
                    </h1>
                    <h1 className="largeText">{question.question}</h1>

                    <div className="flex flex-col gap-7 justify-start items-start">
                      {question.id <= maxQuestion &&
                        question.options.map((q, index) => (
                          <button
                            key={index}
                            onClick={(event) =>
                              handleChoice(q, question.correctAnswer, event, question.id)
                            }
                            className="w-full max-w-[300px] py-1 px-1 bg-white rounded-sm largeText text-indigo-900"
                            id={index}
                          >
                            {q}
                          </button>
                        ))}

                      {question.id < maxQuestion && (
                        <button
                          onClick={handleNext}
                          id="next"
                          className="invisible w-5 py-1 px-2 flex justify-end items-end rounded-tl-5 bg-white text-indigo-800 w-fit "
                        >
                          Next
                        </button>
                      )}

                      {question.id === maxQuestion && (
                        <button
                          onClick={handleSubmit}
                          id="submit"
                          className="invisible py-1 px-2 flex ju rounded-tl-5 bg-white text-indigo-800 w-fit "
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

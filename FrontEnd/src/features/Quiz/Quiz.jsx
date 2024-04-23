import AppLayouts from "../../ui/AppLayouts"
import ButtonQuiz from "../../ui/ButtonQuiz"
import { useQuiz } from "./useQuiz"

function Quiz() {
  const { Quiz } = useQuiz()

  return (
    <>
    <AppLayouts>

      <div className="flex flex-col min-h-[100vh] bg-gray-900 ">
        <header>
          <img
            className="mx-auto  w-[15rem]"
            src='/QuizPng.png'
            alt="Your Company"
            />
          <h1 className=" text-2xl text-center text-white uppercase">Welcome to Gadri Quiz</h1>
          <p className="text-center text-white mt-5 text-xl capitalize">Welcome to Gadri Quiz, your gateway to endless trivia fun! Explore a variety <br /> of quizzes spanning different topics and challenge yourself today</p>
        </header>
        <main className="mt-10">
          <div className="flex flex-wrap gap-10 justify-center items-center mx-[4rem]">
            {
              Quiz?.data.map((item) => {
                return <ButtonQuiz title={item.title} key={item._id} id={item._id} />
              })
            }
          </div>
        </main>
      </div>
    </AppLayouts>
    </>
  )
}

export default Quiz
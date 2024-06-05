import React from "react";

const Questions = () => {
    return (
        <div><main>
        <article className="question-contain">
          <h1>Frequently Asked Questions</h1>
          <button className="question">How does Educate work?</button>
          <p className="answer hidden">
            Educate allows you to choose a language and find the nearest center
            that speaks your language near you for homework help.
          </p>
          <button className="question">Do I have to pay to use Educate?</button>
          <p className="answer hidden">
            Educate is a free online system to help find centers near you that
            offer free homework help.
          </p>
          <button className="question">
            Is there another language beside spanish and english?
          </button>
          <p className="answer hidden">
            As the program expands other languages might be added.
          </p>
          <button className="question">What if I want to add a center?</button>
          <p className="answer hidden">
            If you know of a place which offers free assistance please fill out
            the link below with the information so we can review and add it.
          </p>
          <button className="question">
            How do I know a center exists and is not fake?
          </button>
          <p className="answer hidden">
            Every center shown is verified by our team to make sure the hours and
            times are correct.If they are not please let us know and we can update
            the information.
          </p>
        </article>
      </main></div>
    )
}

export default Questions;
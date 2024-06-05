import React from "react";

const Translate = () => {
  return (
    <div>
      <main className="translate">
        <section>
          <div>
            <h2>Translation Help</h2>
            <h3>
              If you need help with translating a document you can add the file
              below and our users can try to help with the instructions or you
              can post a comment
            </h3>
            <p>
              Remember to post with kindness as our goal is to help parents
              better help their students with homework
            </p>
          </div>

          <form>
            <p>Upload a picture or type a comment in the chat box</p>
            <div>
              <label htmlFor="comment">Choose an image:</label>
              <input
                type="file"
                name="comment"
                accept="image/png,image/jpeg"
                placeholder="Enter your zipcode"
              />
            </div>
            <p>OR</p>
            <div className="chat">
              <label htmlFor="text">
                Add a comment about what you need help with:
              </label>
              <textarea type="text" name="text">
                "What do these instructions mean ...."
              </textarea>
            </div>
            <div>
              <button>Post Comment or Image</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
export default Translate;

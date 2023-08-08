const Motive = () => {
  return (
    <div>
      <div>
        <p className="text-center my-5 text-5xl font-semibold">Why We...?</p>
        <p className="lg:w-4/12 text-center md:mx-auto xsm:mx-2">
          Discover the Exciting Features That Make Our Summer Sports Experience
          Unforgettable
        </p>
      </div>
      <div className="hero w-full my-8">
        <div className="hero-content grid lg:grid-cols-2 md:mx-16 sm:mx-10">
          <img
            src="https://img.freepik.com/free-vector/font-design-summer-camp-with-cute-kid-park_1308-44932.jpg?w=1060&t=st=1686728141~exp=1686728741~hmac=7b58bf981fc9f0144d6e1a0871e7ae632b4c8e9ac36de038f54c3b5036401220"
            className="w-full rounded-lg shadow-2xl"
          />
          <div className=" ms-4">
            <div className="collapse collapse-arrow bg-base-200 my-5">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                We have a Unique Brand Identity
              </div>
              <div className="collapse-content">
                <p>
                  We focus on blending advanced technology with stylish design
                  for standout gear. Our products are designed not just for
                  performance but also for a distinctive look. Attention to
                  detail and innovative features set our gear apart from
                  competitors.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                We focus on Quality Assurance
              </div>
              <div className="collapse-content">
                <p>
                  Rigorous quality control process ensures products are durable
                  and reliable. Premium materials and real-world testing
                  contribute to superior performance. Our commitment to quality
                  means longevity and value for customers.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-5">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                We have a Inclusive Community:
              </div>
              <div className="collapse-content">
                <p>
                  Our events prioritize inclusivity, welcoming all skill levels.
                  Emphasis on fostering a sense of belonging and camaraderie.
                  Participants value the supportive atmosphere, making our
                  community unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motive;

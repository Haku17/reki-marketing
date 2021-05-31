import Beta from "./Beta";
import Header from "./Header";
import Launch from "./Launch";
import Meeting from "./Meeting";
import Transition from "./Transition";

const Onboarding = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p className="text">
          So you’ve read our page and would like to give Reki a try for your company, but what happens now? We have simple onboarding process that we will guide you through. The steps outlined give you a general guideline of how the process of getting started with your own Reki system will work.
        </p>
      </div>
      <Meeting />
      <Transition />
      <Beta />
      <Launch />
      <div className="container">
        <h3 className="heading">Wrap-up</h3>
        <p className="text">
          As you can see there is a bit of work to be done in order to get your new system working great for you. We will gladly work together to guide you to your new ideal system. This process can vary in time based on your unique needs but most customers can expect a launch timeline between 2 to 8 weeks.
        </p>
      </div>
    </>
  );
}

export default Onboarding;
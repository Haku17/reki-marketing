import Beta from "./Beta";
import Header from "./Header";
import Launch from "./Launch";
import Meeting from "./Meeting";
import Transition from "./Transition";

const Onboarding = () => {
  return (
    <>
      <Header />
      <Meeting />
      <Transition />
      <Beta />
      <Launch />
    </>
  );
}

export default Onboarding;
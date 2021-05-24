import Header from "./Header";
import Language from "./Language";
import Online from "./Online";
import Security from "./Security";
import Support from "./Support";
import TablesCharts from "./TablesCharts";
import Upload from "./Upload";

const Features = () => {
  return (
    <>
      <Header />
      <Upload />
      <TablesCharts />
      <Security />
      <Online />
      <Language />
      <Support />
    </>
  );
}

export default Features;
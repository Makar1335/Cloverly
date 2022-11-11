import Preview from "../../block/preview/preview";
import Cloverly_API from "../../block/Cloverly_API/Cloverly_API";
import HowItWork from "../../block/HowItWorks/HowItWorks";
import UseCases from "../../block/UseCases/UseCases";
import ForDevelopers from "../../block/ForDevelopers/ForDevelopers";
import PartnerSpotlight from "../../block/PartnerSpotlight/PartnerSpotlight";
import Activities from "../../block/Activities/Activities";
import CloverlyBlog from "../../block/CloverlyBlog/CloverlyBlog";
import Footer from "../../block/Footer/footer";

function App() {
  return (
    <div className="App">
      <Preview/>
      <Cloverly_API/>
      <HowItWork/>
      <UseCases/>
      <ForDevelopers/>
      <PartnerSpotlight/>
      <Activities/>
      <CloverlyBlog/>
      <Footer/>
    </div>
  );
}

export default App;

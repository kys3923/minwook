import Maps from "./landing_parts/Maps";
import Menu from "./landing_parts/Menu";
import IntroAndOrder from "./landing_parts/IntroAndOrder";

const Landing = (props) => {
  return (
    <div>
      <h1>this is Landing page</h1>
      <IntroAndOrder />
      <Menu />
      <Maps />
    </div>
  );
}
export default Landing;
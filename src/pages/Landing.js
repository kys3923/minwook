import Maps from "./landing_parts/Maps";
import Menu from "./landing_parts/Menu";

const Landing = (props) => {
  return (
    <div>
      <h1>this is Landing page</h1>
      <Menu />
      <Maps />
    </div>
  );
}
export default Landing;
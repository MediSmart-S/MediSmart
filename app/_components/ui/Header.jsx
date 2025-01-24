import NavigationBar from "./NavigationBar";
import TopTagged from "./TopTagged";

const Header = () => {
  return (
    <header>
      <TopTagged />
      <div className="w-full h-px bg-primary-400"></div>
      <NavigationBar />
    </header>
  );
};

export default Header;

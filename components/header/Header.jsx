import Container from "../container/Container";
import NavPhone from "./components/NavPhone";
import NavScreen from "./components/NavScreen";
import TitleHeader from "./components/TitleHeader";

export default function Header() {
  return (
    <div className="w-full border-b-4 lg:fixed lg:top-0 border-blue-ve">
      <Container>
        <TitleHeader />
        <div className="hidden lg:block">
          <NavScreen />
        </div>
       
      </Container>
    </div>
  );
}

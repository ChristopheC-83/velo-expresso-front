import Container from "../container/Container";
import NavScreen from "./components/NavScreen";
import TitleHeader from "./components/TitleHeader";

export default function Header() {
  return (
    <div className="top-0 w-full border-b-4 lg:fixed border-blue-ve bg-neutral-800 text-neutral-50">
      <Container>
        <TitleHeader />
        <div className="hidden lg:block">
          <NavScreen />
        </div>
       
      </Container>
    </div>
  );
}

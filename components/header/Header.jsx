// header et ses composants

import Container from "../container/Container";
import NavScreen from "./components/NavScreen";
import TitleHeader from "./components/TitleHeader";

export default function Header() {
  return (
    <div className="w-full border-b-2 lg:block border-ve-blue bg-neutral-800 text-neutral-50">
      <Container>
        <TitleHeader />
        {/* menu ordinateur à partir de 1024px */}
        <div className="hidden lg:block">
          <NavScreen />
        </div>
      </Container>
    </div>
  );
}

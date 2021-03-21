import { useBreakpointValue } from "@chakra-ui/media-query";
import { DesktopHeader } from "./components/DesktopHeader";
import { MobileHeader } from "./components/MobileHeader";

export function Header() {
  return (
    <>
      <DesktopHeader/>
    </>
  );
}

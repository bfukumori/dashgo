import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type sidebarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as sidebarDrawerContextData);

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const { onClose } = disclosure;
  const router = useRouter();

  useEffect(() => {
    onClose();
  }, [onClose, router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export function useSidebarDrawer() {
  return useContext(SideBarDrawerContext);
}
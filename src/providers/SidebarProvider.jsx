import { useState } from "react"
import { SidebarContext } from "../contexts/SidebarContext"

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;

import AppRoutes from "./routes/AppRoutes"
import SidebarProvider from "./providers/SidebarProvider"
import "animate.css"

function App()
{
  return (
    <>
    <SidebarProvider>
    <AppRoutes />
    </SidebarProvider>
    </>
  );
}

export default App;

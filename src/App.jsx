import AppRoutes from "./routes/AppRoutes"
import SidebarProvider from "./providers/SidebarProvider"
import AuthProvider from "./providers/AuthProvider"
import "animate.css"

function App() {
  return (
    <>
      <AuthProvider>
        <SidebarProvider>
          <AppRoutes />
        </SidebarProvider>
      </AuthProvider>
    </>
  );
}

export default App;

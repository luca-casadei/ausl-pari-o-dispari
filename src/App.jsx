import { Route, Routes } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import AuthProvider from "./components/AuthProvider";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <main>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </AuthProvider>
  );
}

export default App;

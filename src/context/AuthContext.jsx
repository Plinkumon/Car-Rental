import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // user = {username: "admin", role: "admin"}

  const login = (username, password) => {
    if (username === "admin" && password === "admin123") {
      setUser({ username, role: "admin" });
      return true;
    }
    // Normal user login
    setUser({ username, role: "user" });
    return true;
  };

  

  return (
    <AuthContext.Provider value={{ user, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import { createContext } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const authInformation = {
    name: "Aminul",
  };

  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

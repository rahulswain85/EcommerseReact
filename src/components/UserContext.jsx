import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const UserContext = createContext();


export function UserProvider({ children }) {
    
    const navigate = useNavigate();
    const [loggedinUser, setLoggedinUser] = useState( JSON.parse(localStorage.getItem('loggedinUser')) || null);

    const [users, setUsers] = useState(
      JSON.parse(localStorage.getItem("users")) || [],
    );

    const handleLoggedinUser = (currUser) => {
        setLoggedinUser(currUser);
    }

     useEffect(() => {
       localStorage.setItem("users", JSON.stringify(users));
     }, [users]);

     useEffect(() => {
       localStorage.setItem("loggedinUser", JSON.stringify(loggedinUser));
     }, [loggedinUser]);
    
    
    useEffect(() => {
        loggedinUser ? loggedinUser.userType === 'Admin' ? (navigate('/adminDashboard')) : (navigate('/home')) : (null)
    },[])

    function handleUserLogIn(email, password) {
      if (!email || !password) return;

      try {
        const user = users.find(
          (u) =>
            u.userEmail === email.trim() && u.userPassword === password.trim(),
          );
          
          console.log(user);
          

        if (!user) {
          toast.error("User not found!");
          return;
        }

        handleLoggedinUser(user);

        if (user.userType === "Admin") {
          toast.success("Admin login successful!");
          navigate("/adminDashboard");
        } else {
          toast.success("You are logged in successfully");
          navigate("/home");
        }
      } catch (error) {
        toast.error("Problem logging in!");
      }
    }


    function handleUserSignUp(name, email, password) {
        if (!name || !email || !password) return;

        try {
            const newUser = {
              userId: Date.now(),
              userType: "Customer",
              userName: name.trim(),
              userEmail: email.trim(),
              userPassword: password.trim(),
            };

            setUsers((prev) => [...prev, newUser]);
            handleLoggedinUser(newUser);
            toast.success('You are registered successfully!');
            navigate("/home");
        } catch (error) {
            toast.error("Failed to register!");
        }

    }

    function handleUserLogOut() {
        setLoggedinUser(null);
        toast.info('You are logged out!')
      navigate("/");
    }

    const values = {
      handleUserSignUp,
      users,
      loggedinUser,
      handleUserLogOut,
      handleUserLogIn,
    };

    
  return (
      <>
          <UserContext.Provider value={values}>
              {children}
          </UserContext.Provider>
      </>
  )
}

export function useUser() {
    const context = useContext(UserContext);
    return context;
}


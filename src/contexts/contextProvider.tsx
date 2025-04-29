import {useState, createContext, useContext, ReactElement} from "react";

const StateContext = createContext({
	user: null,
});

export const ContextProvider = (children:ReactElement) => {
	const [user, setUser] = useState({});

	return (
		<StateContext.Provider value={{user, setUser}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
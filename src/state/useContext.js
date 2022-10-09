import React, { useContext } from 'react';

const ReducerContext = React.createContext({});

export const useCustomContext = () => {
	return useContext(ReducerContext);
};

export default ReducerContext;

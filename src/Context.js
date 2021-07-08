import React from "react";

const UserContext = React.createContext({
    currentUser: null,
    setCurrentUser: undefined,
});

export default UserContext;

const successMessages = {
    successfullyRegistered: 'Successfully Registered',
    successfullyLoggedIn: 'Successfully Logged In',
    successfullyLoggedOut: 'Successfully Logged Out',
};

const errorMessages = {
    differentPasswords: 'Both Passwords Should Be Equal',
};

const authMessages = {
    ...successMessages,
    ...errorMessages,
};
export default authMessages;
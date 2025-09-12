import logincred from '../../../public/logincred.json';

const CheckLogin = (values) => {
    console.log('Submitted Values:', values);
    console.log('Available Credentials:', logincred);

    const userFound = logincred.find(
        (cred) =>
            cred.username === values.username &&
            cred.password === values.password
    );

    return userFound || null; // returns true if valid user found, otherwise false
};

export { CheckLogin };

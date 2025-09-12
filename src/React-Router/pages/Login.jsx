import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // Optional: for validation
import { useNavigate } from 'react-router-dom';
import { CheckLogin } from '../util/Authentication';

const Login = ({ setIsLoggedIn }) => {
    useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth) {
        setIsLoggedIn(true);
    }
    }, []);
    const navigate=useNavigate()
    const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    field: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        display: 'block',
        fontWeight: 'bold',
    },
    input: {
        padding: '8px',
        fontSize: '14px',
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px',
    }
};

    const formik = useFormik({
    initialValues: {
        username: '',
        password: '',
    },
    validationSchema: Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
  const user = CheckLogin(values); // Now returns user object or null
 if (user) {
    setIsLoggedIn(true);

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify({
      username: user.username,
      roles: user.role
    }));
    localStorage.setItem('isAuthenticated', 'true');

    navigate('/', { replace: true });
  } else {
    alert('Invalid username or password');
  }
}
});

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Login Form</h3>
            <form onSubmit={formik.handleSubmit} style={styles.form}>
                <div style={styles.field}>
                    <label style={styles.label}>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={styles.input}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div style={styles.error}>{formik.errors.username}</div>
                    )}
                </div>

                <div style={styles.field}>
                    <label style={styles.label}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={styles.input}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div style={styles.error}>{formik.errors.password}</div>
                    )}
                </div>

                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

export default Login;


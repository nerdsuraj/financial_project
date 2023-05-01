import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is must'),
    email: Yup.string().email('Invalid email').required('Email is must'),
    password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Password is must'),
});
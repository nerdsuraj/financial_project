import * as Yup from 'yup';

export const signinSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is must'),
    password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Password is must'),
});
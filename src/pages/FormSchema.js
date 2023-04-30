// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is must'),
    email: Yup.string().email('Invalid email').required('Email is must'),
    password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Password is must'),
});
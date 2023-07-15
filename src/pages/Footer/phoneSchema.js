import * as Yup from 'yup';

export const NumberSchema = Yup.object().shape({
    mobile_number: Yup.string().min(10, 'Too Short!').max(10, 'Too Long!').required('Phone Number is must'),
});
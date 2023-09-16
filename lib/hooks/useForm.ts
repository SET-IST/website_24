import { useSession } from "next-auth/react";
import { useState } from "react";

type RegistrationFormData  = {
    age: number;
    university: string;
    course: string;
  }

// useForm functional component
export const useForm = (callback: any, initialState: RegistrationFormData) => {
    const {data: session} = useSession()
    const [values, setValues] = useState(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
        session
    };
};
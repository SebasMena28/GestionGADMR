import { useState } from "react";

const useForm = (initialState) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleInput = (e) => {
        const {value, name} = e.target;

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return {
        formValues,
        handleInput
    }
}


export default useForm
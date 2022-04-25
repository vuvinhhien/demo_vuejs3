import * as yup from "yup";

const useFormVeelidate = () => {
  //State
  const priorities = ["High", "Medium", "Low"];

  const schema = yup.object({
    email: yup.string().required().email("Email address"),
    password: yup.string().required().min(8).max(32),
    age: yup.number().required().min(8).max(100),
    message: yup.string(),
    sendMailOptions: yup.array(),
  });

  // Handlers
  const submitHandler = async () => {};

  return {
    // state: { formInput },
    data: { priorities },
    handlers: { submitHandler },
  };
};

export default useFormVeelidate;

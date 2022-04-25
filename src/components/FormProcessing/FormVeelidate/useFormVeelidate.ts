import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import instance from "../../../configs/axios";

const useFormVeelidate = () => {
  //State
  const priorities = ["High", "Medium", "Low"];
  let timeout: ReturnType<typeof setTimeout>;

  const schema = yup.object({
    email: yup
      .string()
      .required()
      .email()
      .test(
        "checkDuplicateEmail",
        "Email existed",
        async function (value: string | undefined) {
          let result = true;
          if (timeout) {
            clearTimeout(timeout);
          }
          const promise = new Promise<boolean>((resolve, reject) => {
            timeout = setTimeout(async () => {
              try {
                console.log("hello");
                const response = await instance.get(`/users?email=${value}`);
                const { data } = response;

                if (data.length === 0) resolve(true);
                resolve(false);
              } catch (error) {
                console.log(error);
                resolve(false);
              }
            }, 500);
          });
          result = await promise;
          return result;
        }
      )
      .label("Email address"),
    password: yup.string().required().min(8).max(32).label("Password"),
    age: yup.number().required().min(8).max(100).label("Age"),
    message: yup.string().required().label("Message"),
    sendMail: yup.boolean(),
    sendInfoMail: yup.boolean(),
    gender: yup.string().required().label("Gender"),
    selectedPriority: yup.string().required().label("Selected Priority"),
  });

  const formValues = {
    email: "",
    password: "",
    age: 25,
    message: "",
    sendMail: true,
    sendInfoMail: true,
    gender: "Male",
    selectedPriority: "High",
  };

  const { errors, handleSubmit, isSubmitting, handleReset } = useForm({
    validationSchema: schema,
    initialValues: formValues,
  });

  const { value: email } = useField<string>("email");
  const { value: password } = useField<string>("password");
  const { value: age } = useField<number>("age");
  const { value: message } = useField<string>("message");
  const { value: sendMail } = useField<boolean>("sendMail");
  const { value: sendInfoMail } = useField<boolean>("sendInfoMail");
  const { value: gender } = useField<string>("gender");
  const { value: selectedPriority } = useField<string>("selectedPriority");

  // Handlers
  const submitHandler = handleSubmit(async (values) => {
    console.log(values);
  });

  return {
    state: {
      formInput: {
        email,
        password,
        age,
        message,
        sendMail,
        sendInfoMail,
        gender,
        selectedPriority,
        errors,
      },
      isSubmitting,
    },
    data: { priorities },
    handlers: { submitHandler },
  };
};

export default useFormVeelidate;

import { ref, unref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  numeric,
  minLength,
  minValue,
  maxValue,
} from "@vuelidate/validators";

const useFormVuelidate = () => {
  //State
  const formInput = ref<{
    email: string;
    password: string;
    age: number;
    message: string;
    sendMailOptions: string[];
    gender: string;
    selectedPriority: string;
  }>({
    email: "",
    password: "",
    age: 25,
    message: "",
    sendMailOptions: [],
    gender: "",
    selectedPriority: "Low",
  });
  const priorities = ["High", "Medium", "Low"];

  const rules = {
    email: { required, email, $lazy: true },
    password: {
      required,
      minLengthValue: minLength(12),
      $lazy: true,
    },
    age: {
      required,
      numeric,
      minValueValue: minValue(8),
      maxValueValue: maxValue(100),
      $lazy: true,
    },
    message: { required },
    sendMailOptions: { required },
    gender: { required },
    selectedPriority: { required },
  };

  const v$ = useVuelidate(rules, formInput);

  // Handlers
  const submitHandler = async () => {
    const {
      age,
      email,
      gender,
      message,
      password,
      selectedPriority,
      sendMailOptions,
    } = unref(formInput);
    const isFormCorrect = await v$.value.$validate();

    if (!isFormCorrect) return;
  };

  return {
    state: { formInput, v$ },
    data: { priorities },
    handlers: { submitHandler },
  };
};

export default useFormVuelidate;

import { ref, unref, watch } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  numeric,
  minLength,
  minValue,
  maxValue,
  helpers,
} from "@vuelidate/validators";
import instance from "@/configs/axios";

const { withAsync, withMessage } = helpers;

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
    email: {
      required,
      email,
      isUnique: withMessage(
        "Email already existed",
        withAsync(async (value: string) => {
          try {
            const response = await instance.get(`/users?email=${value}`);
            const { data } = response;

            if (data.length === 0) return true;
            return false;
          } catch (error) {
            console.log(error);
          }
        })
      ),
    },
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

  watch(v$, () => {
    console.log(v$.value.email.$errors);
  });

  const assignEmailErrors = async () => {};

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
  };

  return {
    state: { formInput, v$ },
    data: { priorities },
    handlers: { submitHandler },
  };
};

export default useFormVuelidate;

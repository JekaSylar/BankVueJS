import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function taskAddForm(func) {
  const { handleSubmit, isSubmitting } = useForm();

  const {
    value: task,
    errorMessage: tError,
    handleBlur: tBlur,
  } = useField("task", yup.string().trim().required("Введите задачу"));

  const {
    value: desk,
    errorMessage: dError,
    handleBlur: dBlur,
  } = useField("desk", yup.string().trim().required("Введите описание задачи"));

  const onSubmit = handleSubmit(func);

  return { task, tError, tBlur, desk, dError, dBlur, isSubmitting, onSubmit };
}

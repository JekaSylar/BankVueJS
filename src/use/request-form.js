import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
//import { useStore } from 'vuex'

export function useRequestForm(func) {
   const { handleSubmit, isSubmitting } = useForm({
      initialValues: {
         status: 'active'
      }
   });

   //const store = useStore();



   const {
      value: fio,
      errorMessage: fError,
      handleBlur: fBlur,
   } = useField(
      "fio",
      yup
         .string()
         .trim()
         .required("Введите ФИО клиента")
   );

   const {
      value: phone,
      errorMessage: pError,
      handleBlur: pBlur,
   } = useField(
      "phone",
      yup
         .string()
         .trim()
         .required("Телефон не может быть пустым")
   );

   const {
      value: amount,
      errorMessage: aError,
      handleBlur: aBlur,
   } = useField(
      "amount",
      yup
         .number('Только число')
         .required('Введите сумму')
         .min(0, 'Сумма не может быть меньше 0')
   );

   const { value: status } = useField('status');


   const onSubmit = handleSubmit(func);

   return {
      fio,
      fError,
      fBlur,
      phone,
      pError,
      pBlur,
      amount,
      aError,
      aBlur,
      status,
      isSubmitting,
      onSubmit,

   }
}
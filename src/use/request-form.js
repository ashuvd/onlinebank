import {useField, useForm} from "vee-validate";
import * as yup from "yup";

export function useRequestForm(fn) {
  const {isSubmitting, handleSubmit} = useForm({
    initialValues: {
      status: 'active'
    }
  });
  const { value: fio, errorMessage: fioError, handleBlur: fioBlur } = useField(
    'fio',
    yup
      .string()
      .trim()
      .required('Введите фио клиента')
    );
  const { value: phone, errorMessage: phoneError, handleBlur: phoneBlur } = useField(
    'phone',
    yup
      .string()
      .trim()
      .required('Введите телефон клиента')
    );
  const { value: amount, errorMessage: amountError, handleBlur: amountBlur } = useField(
    'amount',
    yup
      .number()
      .required('Введите сумму')
      .min(0, 'Сумма не может быть меньше 0')
    );
  const { value: status } = useField('status');

  const onSubmit = handleSubmit(fn)

  return {
    fio,
    fioError,
    fioBlur,
    phone,
    phoneError,
    phoneBlur,
    amount,
    amountError,
    amountBlur,
    status,
    isSubmitting,
    onSubmit
  }
}

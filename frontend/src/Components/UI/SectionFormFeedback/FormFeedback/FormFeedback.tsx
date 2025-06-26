import {FC, useState} from "react";
import style from './FormFeedback.module.scss';
import {Input} from "../../Input/Input.tsx";
import {Button} from "../../Button/Button.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from "@tanstack/react-query";
import {questionForm} from "../../../../Api/QuestionForm.ts";
import {queryClient} from "../../../../Api/queryClient.ts";
import 'react-phone-input-2/lib/style.css'
import {IMaskInput} from "react-imask";
import cx from "classnames";

export const FormFeedback: FC = () => {

    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);

    const validateFormSchema = z.object({
        name: z.string().min(1, 'Введите свое имя'),
        phone: z.string().min(14, { message: "Введите номер телефона" }),
        email: z.string().min(8, 'Некорректный E-Mail').email('Некорректный формат email'),
    });


    type FormValidation = z.infer<typeof validateFormSchema>

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors}
    } = useForm<FormValidation>({
        resolver: zodResolver(validateFormSchema),
    });

    const questionFormMutation = useMutation({
        mutationFn: questionForm,
        onSuccess: () => {
            console.log('Форма успешно отправлена');
            setIsSuccessMessage(true);
            setTimeout(() => setIsSuccessMessage(false), 4000)
        },
        onError: (error) => {
            setIsErrorMessage(true)
            setTimeout(() => setIsErrorMessage(false), 4000)
            console.error('Ошибка мутации:', error);
        }
    }, queryClient);

    const formatPhoneNumber = (phone: string) => {
        return phone.replace(/[^0-9+]/g, '').trim();
    };

    return (
        <form className={style.formFeedback} onSubmit={handleSubmit(({name, phone, email}) => {
            const trimmedPhone = formatPhoneNumber(phone);
            questionFormMutation.mutate({ name, phone: trimmedPhone, email });
        })}>
            <label className={style.formFeedback__label}>
                <Input
                    className={cx(style.formFeedback__input, errors.name && style.formFeedback__errorInput)}
                    type={'text'}
                    {...register('name')}
                    placeholder="ФИО"
                />
                {errors.name && <span className={style.formFeedback__error}>{errors.name.message}</span>}
            </label>
            <label className={style.formFeedback__label}>
                <IMaskInput
                    mask="+{7}(000)000-00-00"
                    placeholder="Телефон"
                    value={getValues('phone')}
                    onAccept={(value) => setValue('phone', value)}
                    onBlur={() => {
                        const phoneValue = getValues('phone');
                        setValue('phone', phoneValue)
                    }}
                    className={cx(style.formFeedback__phoneInput, errors.phone && style.formFeedback__errorInput)}
                />
                {errors.phone && <span className={style.formFeedback__error}>{
                    errors.phone.message === 'Required' ? 'Введите номер телефона' : errors.phone.message}
                </span>}
            </label>
            <label className={style.formFeedback__label}>
                <Input
                    className={cx(style.formFeedback__input, errors.email && style.formFeedback__errorInput)}
                    type={'email'}
                    {...register('email')}
                    placeholder="Почта"
                />
                {errors.email && <span className={style.formFeedback__error}>{errors.email.message}</span>}
            </label>

            {
                questionFormMutation.isSuccess && isSuccessMessage &&
                <span className={style.success}>Спасибо! Мы получили вашу заявку и скоро вам перезвоним.</span>
            }

            {
                questionFormMutation.error && isErrorMessage &&
				<span className={style.error}>Ошибка отправки!</span>
            }

            <Button myClassName={style.button} text={'Отправить'}/>
        </form>
    );
}
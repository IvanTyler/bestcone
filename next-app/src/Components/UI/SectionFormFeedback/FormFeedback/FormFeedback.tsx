'use client'

import {FC, useState, useEffect} from "react";
import style from './FormFeedback.module.scss';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from "@tanstack/react-query";
import {IMaskInput} from "react-imask";
import { clsx } from 'clsx';
import {Input} from "@/Components/UI/Input/Input";
import {Button} from "@/Components/UI/Button/Button";
import {queryClient} from "@/Api/queryClient";
import {questionForm} from "@/Api/QuestionForm";

export const FormFeedback: FC = () => {

    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);

    const validateFormSchema = z.object({
        name: z.string().min(1, 'Введите свое имя'),
        phone: z.string().min(14, 'Введите номер телефона'),
        email: z.string().min(8, 'Некорректный E-Mail'),
    });


    type FormValidation = z.infer<typeof validateFormSchema>

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: {errors}
    } = useForm<FormValidation>({
        resolver: zodResolver(validateFormSchema),
    });

    // Следим за значением телефона
    const phoneValue = watch('phone');

    const questionFormMutation = useMutation({
        mutationFn: questionForm,
        onSuccess: () => {
            console.log('Форма успешно отправлена');
            setIsSuccessMessage(true);
            reset();
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

    console.log('errors.phone', errors.phone)

    return (
        <form className={style.formFeedback} onSubmit={handleSubmit(({name, phone, email}) => {
            const trimmedPhone = formatPhoneNumber(phone);
            questionFormMutation.mutate({ name, phone: trimmedPhone, email });
        })}>
            <label className={style.formFeedback__label}>
                <Input
                    className={clsx(style.formFeedback__input, errors.name && style.formFeedback__errorInput)}
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
                    value={phoneValue}
                    onAccept={(value: any) => setValue('phone', value, { shouldValidate: true })}
                    className={clsx(style.formFeedback__phoneInput, errors.phone && style.formFeedback__errorInput)}
                />
                {errors.phone && <span className={style.formFeedback__error}>
                    {errors.phone.message && 'Введите номер телефона'}
                </span>}
            </label>
            <label className={style.formFeedback__label}>
                <Input
                    className={clsx(style.formFeedback__input, errors.email && style.formFeedback__errorInput)}
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
import '../Contact/Contact.scss';
// import reCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from 'react-hook-form';

import emailjs from 'emailjs-com';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from 'react';

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  // CAPTCHA States //
  // const [recaptcha, setRecaptcha] = useState('');
  // const [isVerified, setIsVerified] = useState('');

  //   function onChange(value) {
  //     setRecaptcha(value);
  //     if (value) {
  //       setIsVerified(true);
  //     } else {
  //       setIsVerified(false);
  //     }
  // }

  //? States for Material Ui Succes Message Alert on submit //
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // React Hook Form :

  const schema = yup.object().shape({
    firstname: yup.string().required('Ce champ Prénom est requis'),
    lastname: yup.string().required('Ce champ Nom est requis'),
    email: yup
      .string()
      .email('Veuillez entrer un format valide')
      .required("L'email est requis"),
    subject: yup.string().required('Le sujet est requis'),
    message: yup.string().max(420).required('Le message est requis'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isDirty,
      isValid,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
    },
  } = useForm<FormValues>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    event?.preventDefault();
    console.log(data);
    emailjs
      .sendForm(
        'service_tpluyik',
        'template_kvsk7mn',
        '#contact-form',
        'qRGwK12LdfzGZjJL_'
      )
      .then(
        (result) => {
          console.log('EMAIL SEND!', result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <main>
      <section className="main__container">
        <div className="contact__title">
          <h3>Une suggestion ? Une question ?</h3>
          <h2 className="form__head">Contactez-nous</h2>
        </div>

        <div className="form__main">
          <div className="main__wrapper">
            <form
              className="form__wrapper"
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form__card">
                <div className="label__box">
                  <label className="form__label" htmlFor="firstname">
                    Prénom
                  </label>
                </div>
                <input
                  className="form__input"
                  type="text"
                  {...register('firstname')}
                />
                {errors.firstname && <span>{errors.firstname?.message}</span>}
              </div>

              <div className="form__card">
                <div className="label__box">
                  <label className="form__label" htmlFor="lastname">
                    Nom
                  </label>
                </div>
                <input
                  className="form__input"
                  type="text"
                  {...register('lastname')}
                />
                {errors.lastname && <span>{errors.lastname?.message}</span>}
              </div>

              <div className="form__card">
                <div className="label__box">
                  <label className="form__label" htmlFor="email">
                    Email
                  </label>
                </div>
                <input
                  className="form__input"
                  type="email"
                  {...register('email')}
                />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>

              <div className="form__card">
                <div className="label__box">
                  <label className="form__label" htmlFor="subject">
                    Sujet
                  </label>
                </div>

                <input
                  className="form__input"
                  type="text"
                  {...register('subject')}
                />
                {errors.subject && <span>{errors.subject?.message}</span>}
              </div>

              <div className="form__card">
                <div className="label__box">
                  <label className="form__textarea__label" htmlFor="message">
                    Votre message
                  </label>
                </div>
                <textarea
                  className="form__textarea"
                  rows={3}
                  {...register('message')}
                ></textarea>
                {errors.message && <span>{errors.message?.message}</span>}
              </div>

              <div className="btn__wrap">
                {/* <reCAPTCHA /> */}
                <button type="submit" onClick={handleClick}>
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          {isSubmitSuccessful === true && (
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
              >
                Message Envoyé !
              </Alert>
            </Snackbar>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;

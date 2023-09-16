import { Form, Formik } from "formik";
import { useEffect, useId, useState } from "react";
import * as Yup from "yup";
//  Components
import Alert from "@/core/components/Alert";
import { Button } from "@/core/components/Button";
import FormikTextInput from "@/core/components/FormikTextInput/FormikTextInput";
//  Hooks
import { useAuth } from "@/lib/hooks/use-auth";
import { useRouter } from "next/router";
//  Services
import { links } from "@/core/services/links";
//  Types
import type { FormikHelpers } from "formik";

type SignupFormProps = {
  csrfToken?: string;
};

type SignupFormValuesProps = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  csrfToken: string;
  code: string;
  categoryId: number;
};

const SignupForm = ({ csrfToken }: SignupFormProps) => {
  const id = useId();
  const router = useRouter();
  const {
    signupWithCredentials,
    isSignupSuccess,
    isSignupLoading,
    isSignupError,
  } = useAuth();
  const [isAlertVisible, setAlertVisible] = useState(isSignupSuccess);

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    csrfToken: csrfToken || "",
    categoryId: 1,
    code: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo é obrigatório"),
    username: Yup.string().required("Este campo é obrigatório"),
    email: Yup.string().required("Este campo é obrigatório"),
    password: Yup.string()
      .min(3, "Tem de ter, no mínimo, 3 caractéres")
      .max(128, "Tem de ter, no máximo, 128 caractéres")
      .required("Este campo é obrigatório"),
    confirmPassword: Yup.string()
      .min(3, "Tem de ter, no mínimo, 3 caractéres")
      .max(128, "Tem de ter, no máximo, 128 caractéres")
      .required("Este campo é obrigatório"),
    csrfToken: Yup.string(),
    categoryId: Yup.number().required("Este campo é obrigatório"),
    code: Yup.string().required("Este campo é obrigatório"),
  });

  const submitHandler = async (
    values: SignupFormValuesProps,
    { setSubmitting }: FormikHelpers<SignupFormValuesProps>
  ) => {
    await signupWithCredentials(values)
      .then(() => router.push(links.company.profile))
      .finally(() => setSubmitting(false));
  };

  useEffect(() => {
    if (isSignupSuccess || isSignupError) {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
    }
  }, [isSignupSuccess, isSignupError]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ isSubmitting, dirty, isValid, values }) => (
        <Form className="grid grid-cols-2 gap-5 mt-5 mb-3">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="col-span-2 md:col-span-1">
            <FormikTextInput
              label="Name"
              id={`${id}-name`}
              name="name"
              placeholder="John Doe"
              labelClassName="!text-sm my-2"
              errorClassName="!text-xs"
              isSuccess={isSignupSuccess}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <FormikTextInput
              label="Username"
              id={`${id}-username`}
              name="username"
              placeholder="JohnDoe23"
              labelClassName="!text-sm my-2"
              errorClassName="!text-xs"
              isSuccess={isSignupSuccess}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            {/* <FormikSelectInput
              label="Category"
              id={`${id}-category`}
              name="categoryId"
              labelClassName="!text-sm my-2"
              errorClassName="!text-xs"
              isSuccess={isSignupSuccess}
              options={[
                { label: 'Platina', value: 1 },
                { label: 'Gold', value: 2 },
                { label: 'Silver', value: 3 },
                { label: 'Partner', value: 4 },
              ]}
            /> */}
          </div>
          <div className="col-span-2 md:col-span-1">
            <FormikTextInput
              label="Code"
              id={`${id}-code`}
              name="code"
              labelClassName="!text-sm my-2"
              errorClassName="!text-xs"
              isSuccess={isSignupSuccess}
            />
          </div>
          <div className="col-span-2">
            <FormikTextInput
              label="Email"
              id={`${id}-email`}
              name="email"
              placeholder="@tecnico.ulisboa.pt"
              labelClassName="!text-sm my-2"
              errorClassName="!text-xs"
              isSuccess={isSignupSuccess}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <FormikTextInput
              label="Palavra-passe"
              id={`${id}-password`}
              placeholder="*********"
              name="password"
              type="password"
              labelClassName="!text-sm my-2"
              errorClassName="!text-xs"
              isSuccess={isSignupSuccess}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <FormikTextInput
              label="Confirmar palavra-passe"
              id={`${id}-confirmPassword`}
              placeholder="*********"
              name="confirmPassword"
              type="password"
              labelClassName="!text-sm my-2"
              errorClassName="!text-xs"
              isSuccess={isSignupSuccess}
            />
          </div>
          {isAlertVisible ? (
            <>
              {isSignupSuccess && (
                <Alert
                  color="success"
                  title="Alterações realizadas com sucesso"
                  text="Podes sempre alterar de novo caso seja engano."
                  className="my-3"
                />
              )}
              {isSignupError && (
                <Alert
                  color="danger"
                  title="Erro ao realizar as alterações"
                  text="Tenta de novo, caso o erro persista contacta-nos."
                  className="my-3"
                />
              )}
            </>
          ) : null}

          <div className="col-span-2">
            <Button
              type="submit"
              isBlock
              className="my-4"
              isLoading={isSignupLoading || isSubmitting}
              disabled={
                !dirty || !isValid || values.confirmPassword !== values.password
              }
            >
              Registar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
export type { SignupFormProps, SignupFormValuesProps };

import React, { useState } from "react";
import styles from "./styles/Contact.module.scss";
import { SvgLink } from "./Hero";
import { withFormik } from "formik";
import NodeFetch from "node-fetch";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object({
    name: Yup.string().min(2, "Name must be longer than 2 characters").required("Name is required"),
    email: Yup.string().email("Invalid e-mail address").required("E-mail is required"),
    reason: Yup.string().required("Reason is required"),
    msg: Yup.string().min(5, "Message must be five or more characters").required("Message is required"),
  })
    .required()
    .noUnknown(),
  handleSubmit: (payload, { setSubmitting, setStatus, resetForm }) => {
    console.log(payload);
    NodeFetch(
      `http://mramp.me/mail.php?name=${payload.name}&email=${payload.email}&reason=${payload.reason}&msg=${payload.msg}`
    ).then((res) => {
      if (res.status === 200) {
        resetForm({});
        setStatus({ msg: "E-mail sent successfully" });
        setSubmitting(false);
      } else {
        setStatus({ msg: `Error occured with code: ${res.status}` });
        setSubmitting(false);
      }
    });
  },
  mapPropsToValues: () => ({
    name: "",
    email: "",
    reason: "",
    msg: "",
  }),
  displayName: "MyForm",
});

const spinner = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    style={{ margin: "auto", background: "transparent" }}
    width='36'
    height='36'
    viewBox='0 0 100 100'
    preserveAspectRatio='xMidYMid'
    display='block'
  >
    <circle
      cx='50'
      cy='50'
      fill='none'
      stroke='#eff1f3'
      stroke-width='7'
      r='29'
      stroke-dasharray='136.659280431156 47.553093477052'
      transform='rotate(15.426 50 50)'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        repeatCount='indefinite'
        dur='1s'
        values='0 50 50;360 50 50'
        keyTimes='0;1'
      />
    </circle>
  </svg>
);

const Input = ({ id, error, value, handleBlur, handleChange, label }) => (
  <div className={styles["input-container"]}>
    <label htmlFor={id} className={error ? styles["error"] : styles["label"]}>
      {label}
    </label>
    <input
      className={`${error ? styles["input-error"] : null} ${!error && value ? styles["valid"] : null}`}
      id={id}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    ></input>
    <span className={styles["error"]}>{error}</span>
  </div>
);

const TextArea = ({ id, error, value, handleBlur, handleChange, label }) => (
  <div className={styles["textarea-container"]}>
    <label htmlFor={id} className={error ? styles["error"] : styles["label"]}>
      {label}
    </label>
    <textarea
      className={`${error ? styles["input-error"] : null} ${!error && value ? styles["valid"] : null}`}
      id={id}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
    ></textarea>
    <span className={styles["error"]}>{error}</span>
  </div>
);

const Select = ({ id, error, value, handleBlur, handleChange, label, children }) => (
  <div className={styles["select-container"]}>
    <label htmlFor={id} className={error ? styles["error"] : styles["label"]}>
      {label}
    </label>
    <select
      id={id}
      onBlur={handleBlur}
      onChange={handleChange}
      value={value}
      className={`${error ? styles["input-error"] : null} ${!error && value ? styles["valid"] : null}`}
    >
      <option value='' selected={true} disabled={true}>
        Select option
      </option>
      {children}
    </select>
    <span className={styles["error"]}>{error}</span>
  </div>
);

const SubmitButton = ({ children, isSubmitting }) => (
  <button className={isSubmitting ? styles["loading"] : null} type='submit' disabled={isSubmitting}>
    {children}
  </button>
);

const ContactForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
    resetForm,
    isValid,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          id='name'
          error={touched.name && errors.name}
          value={values.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label='Name'
        />
        <Input
          id='email'
          error={touched.email && errors.email}
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label='E-mail'
        />

        <Select
          id='reason'
          error={touched.reason && errors.reason}
          value={values.reason}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label='Reason'
        >
          <option value='work'>For work</option>
          <option value='hi'>Say hi</option>
        </Select>
      </div>
      <div>
        <span className={styles["separator"]} />
      </div>
      <div>
        <TextArea
          id='msg'
          error={touched.msg && errors.msg}
          value={values.msg}
          handleBlur={handleBlur}
          handleChange={handleChange}
          label='Message'
        />
        <SubmitButton isSubmitting={isSubmitting}> {isSubmitting ? spinner : "Submit"} </SubmitButton>
        <span className={`${styles["label"]} ${styles["status-msg"]} `}>{status ? status.msg : null}</span>
      </div>
    </form>
  );
};

const Form = formikEnhancer(ContactForm);

export const ContactSection = () => (
  <div className={styles["container"]}>
    <h1>Contact me</h1>
    <Form />
    <div className={styles["links"]}>
      <SvgLink />
    </div>
  </div>
);

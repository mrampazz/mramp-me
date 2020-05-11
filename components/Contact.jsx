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
    msg: Yup.string()
      .min(5, "Message must be five or more characters")
      .required("Message is required"),
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
      } else {
        setStatus({ msg: `Error occured with code: ${res.status}` });
      }
    });
    setSubmitting(false);
  },
  mapPropsToValues: () => ({
    name: "",
    email: "",
    reason: "",
    msg: "",
  }),
  displayName: "MyForm",
});

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
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className={styles["input-container"]}>
          <label
            htmlFor="name"
            className={touched.name && errors.name ? styles["error"] : styles["label"]}
          >
            Name
          </label>
          <input
            id="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
            className={touched.name && errors.name ? styles["input-error"] : null}
          />
          <span className={styles["error"]}>{touched.name && errors.name}</span>
        </div>
        <div className={styles["input-container"]}>
          <label
            htmlFor="email"
            className={touched.email && errors.email ? styles["error"] : styles["label"]}
          >
            E-mail
          </label>
          <input
            id="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            className={touched.email && errors.email ? styles["input-error"] : null}
          />
          <span className={styles["error"]}>{touched.email && errors.email}</span>
        </div>
        <div className={styles["select-container"]}>
          <label
            htmlFor="reason"
            className={touched.reason && errors.reason ? styles["error"] : styles["label"]}
          >
            Reason
          </label>
          <select
            id="reason"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.reason}
            className={touched.reason && errors.reason ? styles["input-error"] : null}
          >
            <option value="" selected={true} disabled={true}>
              Select option
            </option>
            <option value="work">For work</option>
            <option value="hi">Say hi</option>
          </select>
          <span className={styles["error"]}>{touched.reason && errors.reason}</span>
        </div>
      </div>
      <div>
        <span className={styles["separator"]} />
      </div>
      <div>
        <div className={styles["textarea-container"]}>
          <label
            htmlFor="msg"
            className={touched.msg && errors.msg ? styles["error"] : styles["label"]}
          >
            Message
          </label>
          <textarea
            id="msg"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.msg}
            className={touched.msg && errors.msg ? styles["input-error"] : null}
          />
          <span className={styles["error"]}>{touched.msg && errors.msg}</span>
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        {status && status.msg && <span className={styles["label"]}>{status.msg}</span>}
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

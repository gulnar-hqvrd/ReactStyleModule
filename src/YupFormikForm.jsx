import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"


const schema = Yup.object({
  name: Yup.string()
    .min(3, "Ad ən az 3 simvol olmalıdır")
    .required("Ad boş ola bilməz"),
  email: Yup.string()
    .email("Email düzgün deyil")
    .required("Email boş ola bilməz"),
});

function YupFormikForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <label>Ad:</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />

          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <button type="submit">Göndər</button>
        </Form>
      )}
    </Formik>
  );
}

export default YupFormikForm;

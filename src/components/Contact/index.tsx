import * as yup from 'yup';
import { useFormik } from 'formik';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import {
  Form,
  FormContainer,
  HeadingContainer,
  Section,
  SubmitBtn,
  Textarea,
  Wrapper,
  Label,
  Input,
  FormItem,
  FeedbackContainer,
} from './styles';
import axios from 'axios';

const Contact: React.FC = () => {
 


  const schema = yup.object().shape({
    name: yup
      .string()
      .required(('ErrorRequired') || 'Your name is required')
      .min(2, ('ErrorMinName') || 'Your name needs at least 2 characters'),
    email: yup
      .string()
      .required(('ErrorRequired') || 'Your email is required')
      .email(('ErrorEmailFormat') || 'Needs to be a valid email'),
    message: yup
      .string()
      .required(('ErrorRequired') || 'Your message is required')
      .min(20, ('ErrorMinMessage') || 'Your message needs at least 20 characters'),
  });

  function onSubmit() {
    axios.post('https://getform.io/f/772b6ddd-c4a3-44b2-a018-96ac8fd73e2c', values)
    resetForm();
  }

  const { values, errors, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    <Section id="Contact">
      <Wrapper>
        <HeadingContainer>
          <h2>{('Contact')}</h2>
          <p>{('ContactDescription')}</p>
        </HeadingContainer>
        <FormContainer>

          <Form
            action="https://getform.io/f/772b6ddd-c4a3-44b2-a018-96ac8fd73e2c"
            method="POST"
            autoComplete="off"
            spellCheck={false}
            onSubmit={handleSubmit}
          >
            <FormItem>
              <Label htmlFor="name">{('Name')}</Label>
              <Input
                type="text"
                name="name"
                value={values.name}
                error={errors.name}
                placeholder="John Doe"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FeedbackContainer>
                {errors.name ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'crimson' }}>
                    <FaExclamationTriangle /> {errors!.name}
                  </div>
                ) : (
                  values.name && (
                    <div style={{ display: 'flex', placeItems: 'center', gap: 10, color: 'green' }}>
                      <FaCheckCircle /> Ok!
                    </div>
                  )
                )}
              </FeedbackContainer>
            </FormItem>

            <FormItem>
              <Label htmlFor="email">{('Email')}</Label>
              <Input
                type="text"
                name="email"
                value={values.email}
                error={errors.email}
                placeholder="johndoe@gmail.com"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <FeedbackContainer>
                {errors.email ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'crimson' }}>
                    <FaExclamationTriangle /> {errors!.email}
                  </div>
                ) : (
                  values.email && (
                    <div style={{ display: 'flex', placeItems: 'center', gap: 10, color: 'green' }}>
                      <FaCheckCircle /> Ok!
                    </div>
                  )
                )}
              </FeedbackContainer>
            </FormItem>

            <FormItem>
              <Label htmlFor="message">{('Message')}</Label>
              <Textarea
                name="message"
                value={values.message}
                error={errors.message}
                placeholder={('EnterMessage') || 'Enter your message'}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={10}
              ></Textarea>
              <FeedbackContainer>
                {errors.message ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'crimson' }}>
                    <FaExclamationTriangle /> {errors!.message}
                  </div>
                ) : (
                  values.message && (
                    <div style={{ display: 'flex', placeItems: 'center', gap: 10, color: 'green' }}>
                      <FaCheckCircle /> Ok!
                    </div>
                  )
                )}
              </FeedbackContainer>
            </FormItem>

            <SubmitBtn>{('FormCTA')}</SubmitBtn>
          </Form>
        </FormContainer>
      </Wrapper>
    </Section>
  );
};
export default Contact;
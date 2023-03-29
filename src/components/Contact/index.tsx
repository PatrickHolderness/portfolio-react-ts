import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import {
  Form,
  FormContainer,
  HeadingContainer,
  Section,
  TextArea,
  Wrapper,
  Label,
  Input,
  FormItem,
  FeedbackContainer,
} from './styles';

import { Button } from '../Buttons/styles';

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
    axios.post('https://getform.io/f/1fb8e500-493a-494f-a23d-c1a639a53c77', values);
    resetForm();
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = 
  useFormik({
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
          {/* <p>{('Get in touch with me')}</p> */}
        </HeadingContainer>
        <FormContainer>
        <Form autoComplete="off" spellCheck={false} onSubmit={handleSubmit}>
            <FormItem>
              <Label htmlFor="name">{('Name')}</Label>
              <Input
                type="text"
                name="name"
                value={values.name}
                touched={touched.name}
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
                touched={touched.email}
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
              <TextArea
                name="message"
                value={values.message}
                touched={touched.message}
                error={errors.message}
                placeholder={('Enter your message')}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={10}
              ></TextArea>
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

            <Button>{('Send')}</Button>
          </Form>
        </FormContainer>
      </Wrapper>
    </Section>
  );
};
export default Contact;
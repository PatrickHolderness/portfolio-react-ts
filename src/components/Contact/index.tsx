
import {
  Form,
  FormContainer,
  HeadingContainer,
  InputName,
  InputEmail,
  Section,
  SubmitBtn,
  Textarea,
  Wrapper,
  Label,
} from './styles';

const Contact: React.FC = () => {


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <Section id="Contact">
   
      <Wrapper>
        <HeadingContainer>
          <h2>{('Contact')}</h2>
          <p>{('ContactDescription')}</p>
        </HeadingContainer>
        <FormContainer>
          {/* https://getform.io/f/772b6ddd-c4a3-44b2-a018-96ac8fd73e2c */}
          <Form action="" method="POST" onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <InputName
              type="text"
              name="name"
              placeholder="John Doe"
              spellCheck={false}
              required={true}
            />
            <p style={{opacity: 1}}>Needs to be at least 2 characters long.</p>
            <Label htmlFor="email">Email</Label>
            <InputEmail
              type="text"
              name="email"
              placeholder="johndoe@gmail.com"
              spellCheck={false}
              required={true}
              />
              <p>Must be a valid email.</p>
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              placeholder={('EnterMessage') || 'Enter your message'}
              rows={10}
              spellCheck={false}
              required={true}
              ></Textarea>
              <p>Needs to be at least 10 characters long.</p>
            <SubmitBtn>{('FormCTA')}</SubmitBtn>
          </Form>
        </FormContainer>
      </Wrapper>
    </Section>
  );
};
export default Contact;
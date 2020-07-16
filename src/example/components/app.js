import React, { useCallback } from 'react';

import { Form, Field } from '~/form';

const App = () => {
  const handleFormSubmit = useCallback((formState) => {
    // eslint-disable-next-line no-console
    console.log(formState);
  }, []);

  return (
    <div className="app">
      <Form onSubmit={handleFormSubmit}>
        <p>
          Email: <Field type="input" name="email" defaultValue="serejanxxx@gmail.com" />
        </p>
        <p>
          Keep sign in: <Field type="checkbox" name="keepSignIn" defaultChecked={true} />
        </p>
        <p>
          Sex:{' '}
          <Field type="select" name="sex" defaultValue="female">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
        </p>
        <p>
          Description: <Field type="textarea" name="description" />
        </p>
        <p>
          Item:{' '}
          <Field type="radio" name="item" value="first">
            First
          </Field>
          <Field type="radio" name="item" value="second">
            Second
          </Field>
          <Field type="radio" name="item" value="third">
            Third
          </Field>
        </p>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default App;

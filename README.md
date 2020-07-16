# Description

Smart React form component written with hooks

# Basic component example
```js
import React from 'react';

import { Form, Field } from '@adeon/form';

const Component = () => {
  const handleSubmit = useCallback(formState => {
    console.log(formState);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="name" type="text" />
      <Field name="email" type="email" defaultValue="example@gmail.com" />
      <Field name="description" type="textarea" />
      <p>Example checkbox: <Field name="" type="checkbox" defaultChecked={false} /></p>

      <button type="submit">Submit</button>
    </Form>
  );
}

export default Component;

```

# Custom component example
```js
import React from 'react';

import { Form, Field } from '@adeon/form';

const Component = () => {
  const handleSubmit = useCallback(formState => {
    console.log(formState);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      {formState => (
        <>
          <Field name="name" type="text" />
          <p>Your name is: {formState.name}</p>

          <button type="submit">Submit</button>
        </>
      )}
    </Form>
  );
}

export default Component;

```

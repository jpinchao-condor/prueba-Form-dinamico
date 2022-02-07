import React from 'react';
import TextField from 'emerald-ui/lib/TextField';
import Container from 'emerald-ui/lib/Container';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import IconButton from 'emerald-ui/lib/IconButton';
import './conditionField.css'

export const ConditionField = () => {
  return (
      <fieldset>
      <Container>
          <Row>
              <Col xs={3}>
                <TextField label='source' value='' />
              </Col>
              <Col xs={4}>
              <TextField label='operator' value='' />
              </Col>
              <Col xs={4}>
              <TextField label='expect'value='' />
              </Col>
              <Col xs={1} className='col-button' >
              <IconButton className='bright'  color='danger' ariaLabel="Remove" icon="remove_circle" title="removeItem" />
              </Col>
          </Row>
      </Container>
      <IconButton className='bright'  color='success' ariaLabel="Remove" icon="add_circle" title="removeItem" />
      </fieldset>
  );
};

/* eslint-disable react/prop-types */
import React from 'react';
import {Pretitle, Title} from './elements/typography';
import {Column} from './elements/structure';

const ErrorMessage = ({pretitle = 'Oops...', title = 'Error', children}) => <Column>
    <Pretitle>{pretitle}</Pretitle>
    <Title>{title}</Title>
    {children}
</Column>;

export default ErrorMessage;
import React from 'react';
import InputMask from 'react-text-mask';

export default function InputCPF(props) {
    return <InputMask guide mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]} {...props}/>
}
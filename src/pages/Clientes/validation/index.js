import * as Yup from 'yup';

const schema = Yup.object().shape({
  codigo: Yup.string()
    .required('O código é obrigatório'),
  nome: Yup.string()
    .required('O nome é obrigatório'),
  endereco: Yup.string()
    .required('O endereço é obrigatório'),  
  bairro: Yup.string()
    .required('O bairro é obrigatório'),
  cidade: Yup.string()
    .required('A cidade é obrigatório'),  
  cep: Yup.string()
    .matches('[0-9]{2}.[0-9]{3}-[0-9]{3}', {
      message: 'CEP inválido', excludeEmptyString: true 
    })
    .required('O CEP é obrigatório'),
  cpf: Yup.string()
    .matches('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}', {
      message: 'CPF inválido', excludeEmptyString: true
    })
    .required('O CPF é obrigatório'),
  rg: Yup.string()
    .matches('[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]{1}', {
      message: 'RG inválido', excludeEmptyString: true
    })
    .required('O RG é obrigatório') 
});

export { 
  schema
}; 
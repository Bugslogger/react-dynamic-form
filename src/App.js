import Form from './components/form/Form';
import styles from './styles.module.css';
import React from 'react';
import './App.css';

function App() {




  const sample=[
    {
    id:"1",
    type:"Text",
    name:"text",
    className:"",
   element: <input type="text" placeholder='Element is true' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />,
    iselement:false,
    label:"Company Name",

 



  
},

{
  id:"2",
  type:"password",
  name:"text",
  className:"",

  iselement:false,
  label:"Company Website",

  render: (item) => {
    return <div>{item}</div>;
  },

},
{
  id:"3",
  type:"text",
  name:"Text",
  className:"",
 
  iselement:false,
  label:"Company Email",



},
{
  id:"3",
  type:"text",
  name:"Text",
  className:"",
 
  iselement:false,
  label:"Company Email",



},
{
  id:"3",
  type:"text",
  name:"Text",
  className:"",
 
  iselement:false,
  label:"Company Email",



},

{
  id:"3",
  type:"text",
  name:"Text",
  className:"",

  iselement:false,
  label:"Company Address",



},
{
  id:"3",
  type:"text",
  name:"Text",
  className:"",

  iselement:false,
  label:"Phone Number",



}
]
  return (
    <div className={styles.container} >
<Form formData={sample} />
    </div>
  );
}

export default App;

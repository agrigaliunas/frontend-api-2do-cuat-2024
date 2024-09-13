import React, { useState, useEffect } from 'react'
import { MyAccountSection } from '../sections/MyAccountSection';
import { MyAccountSectionTitle } from '../MyAccountSectionTitle';
import { InfoAccount } from '../icons/InfoAccount.jsx'
import { Padlock } from '../icons/Padlock.jsx';
import { Danger } from '../icons/Danger.jsx';
import { FormTitle } from '../forms/FormTitle.jsx';
import { SubTitle } from '../forms/SubTitle.jsx';


const sections = [{
  step: 0,
  title: "Información personal",
  icon: <InfoAccount />,
  labels: [{
    title: "Nombre",
    placeholder: "Ingrese nombre...",
    type: "text"
  },
  {
    title: "Apellido",
    placeholder: "Ingrese apellido...",
    type: "text"
  },
  {
    title: "Correo electrónico",
    placeholder: "Ingrese correo electrónico...",
    type: "email"
  }
  ],
  button: "Actualizar información",
  buttonColor: "bg-brandblue"
},
{
  step: 1,
  title: "Seguridad",
  icon: <Padlock />,
  labels: [{
    title: "Contraseña actual",
    placeholder: "Ingrese contraseña actual...",
    type: "password"
  },
  {
    title: "Nueva contraseña",
    placeholder: "Ingrese nueva contraseña...",
    type: "password"
  },
  {
    title: "Repetir nueva contraseña",
    placeholder: "Ingrese nueva contraseña...",
    type: "password"
  }
  ],
  button: "Actualizar contraseña",
  buttonColor: "bg-brandblue"
},
{
  step: 2,
  title: "Zona peligrosa",
  icon: <Danger />,
  labels: [{
    title: "⚠️ ¡Atención! ¡Esta acción no tiene vuelta atrás!",
    placeholder: "Ingrese contraseña para eliminar la cuenta...",
    type: "password"
  },
  ],
  button: "Eliminar cuenta",
  buttonColor: "bg-red-600	"
}]

const MyAccountLayout = () => {


  const [step, setStep] = useState(1);
  const [clearForm, setClearForm] = useState(false);

  const handleChangeStep = (selectedStep) => {
    setStep(selectedStep)
    setClearForm(true);
  }

  useEffect(() => {
    if (clearForm) {
      setClearForm(false);
    }
  }, [clearForm]);

  return (
    <div className="flex flex-col p-6 w-[90vw] h-[80vh] lg:w-[30vw] gap-6">
      <div className="flex flex-col gap-1">
      <FormTitle title='Mi cuenta'></FormTitle>
      <SubTitle subtitle='¡Seleccioná una opción para mas detalles!'></SubTitle>
      </div>
      <div className='flex flex-row justify-left w-full gap-4'>
        {sections.map(s => (
          <MyAccountSectionTitle section={s} actualStep={step} changeStep={handleChangeStep} />
        ))}
      </div>
      <MyAccountSection
        section={sections[step]}
        clearForm={clearForm}
      />
    </div>
  )
}

export default MyAccountLayout;
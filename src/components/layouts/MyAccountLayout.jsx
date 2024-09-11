import React, { useState } from 'react'
import { MyAccountSection } from '../sections/MyAccountSection';
import { MyAccountSectionTitle } from '../MyAccountSectionTitle';
import { DeleteAccount } from '../icons/DeleteAccount.jsx'
import { InfoAccount } from '../icons/InfoAccount.jsx'
import { Padlock } from '../icons/Padlock.jsx';
import { Danger } from '../icons/Danger.jsx';


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
  button: "Actualizar información"
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
  button: "Actualizar contraseña"
},
{
  step: 2,
  title: "Zona peligrosa",
  icon: <Danger/>,
  labels: [{
    title: "Elimina tu cuenta. Esta acción no tiene vuelta atrás.",
  },
  ],
  button: "Eliminar cuenta"
}]

const MyAccountLayout = () => {


  const [step, setStep] = useState(1);

  const handleChangeStep = (selectedStep) => {
    setStep(selectedStep)
  }

  return (
    <div className="flex flex-col p-6 w-[90vw] h-[80vh] lg:w-[30vw] border border-1 border-[#e9e9ef] rounded-md shadow-sm gap-6">
      <h2 className="text-3xl font-semibold text-center">Mi cuenta</h2>
      <div className='flex flex-row justify-center w-full gap-4'>
        {sections.map(s => (
          <MyAccountSectionTitle section={s} actualStep={step} changeStep={handleChangeStep}/>
        ))}
      </div>
        <MyAccountSection section={sections[step]} />
    </div>
  )
}

export default MyAccountLayout;
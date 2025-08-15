import React from 'react'
import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'

function FormPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ControlledForm />
        </div>
        <div className="h-full bg-white shadow-lg rounded-lg p-6">
          <UncontrolledForm />
        </div>
      </div>
    </div>
  )
}

export default FormPage

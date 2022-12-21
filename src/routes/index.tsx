import React from 'react'
import { AuthRoutes } from './auth.flow.routes'

import { ClientFlowRoutes } from './client.flow.routes'
import { ProfessionalFlowRoutes } from './professional.flow.routes'

export function Routes() {
  const isLoged = false
  const isClient = false
  const isProfessional = false

  return (
    <>
      {isLoged && isClient && <ClientFlowRoutes />}
      {isLoged && isProfessional && <ProfessionalFlowRoutes />}
      {!isLoged && <AuthRoutes />}
    </>
  )
}

import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

export const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )

}


Message.defaultProps = {
  variant: 'info'
} 
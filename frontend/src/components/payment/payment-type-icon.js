import React from 'react'

const logoPaypal = require('../../images/paypal-icon.png')
const creditCardIcon = require('../../images/credit-card-icon.svg')

const PaymentTypeIcon = props => {
  return (
    <div>
      { props.type === 'paypal' ?
        (<div style={{textAlign: 'left'}}><img src={logoPaypal} width={48}/></div>) :
        (<div style={{textAlign: 'left', color: '#12789a', fontSize: 10}}><img src={creditCardIcon} width={48}/> <br />
            { !props.notext && <span>Cartão de crédito</span>}
        </div>)
      }
    </div>
  )
}

export default PaymentTypeIcon

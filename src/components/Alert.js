import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}
 {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */
}{/* here arrow is removed in order to create a alert dynamic*/}
</div>
</div>}
</div>
    
  )
}
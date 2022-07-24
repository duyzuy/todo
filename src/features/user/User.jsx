import React from 'react'
import withPageLayout from '../../components/Common/withPageLayout'
const User = () => {
  return (
    <div>User data table</div>
  )
}

export default withPageLayout(User, {
    title: "User",
} )
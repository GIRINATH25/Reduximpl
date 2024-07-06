import React from 'react';
import { useSelector } from 'react-redux';

const Show = () => {
  const user = useSelector(state=>state.userinfo.user)
  console.log(user)
  return (
    <div>
      Show
    </div>
  )
}

export default Show

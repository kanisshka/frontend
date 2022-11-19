import React , {useEffect}from 'react'
import { Redirect, useNavigate } from 'react-router-dom'

const Play = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/finish')
    }, [])
    
  return (
    <div>Play</div>
    
  )
}

export default Play
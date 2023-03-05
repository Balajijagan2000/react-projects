import React, { useEffect, useState } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,type,index}) => {
    const bg = `rgb(${rgb.join(',')})`
    const hexbg = rgbToHex(...rgb)
    const [isCopied,setIsCopied] =  useState(false)
    const copyToClipboard = () => {
        setIsCopied(true)
        navigator.clipboard.writeText(hexbg)
    }
    useEffect(() => {

        const timer = setTimeout(()=>setIsCopied(false),3000)

        return () => clearTimeout(timer)
    },[isCopied])
  return (
    <div className={`single-color ${index >= 10 ? 'color-light' : null}`} style={{backgroundColor:bg}}
    onClick={copyToClipboard}>
        <p>{weight}%</p>
        <p>{hexbg}</p>
        {
            isCopied && <p style={{fontSize: '.8rem'}}>Copied to clipboard</p>
        }
    </div>
  )
}

export default SingleColor
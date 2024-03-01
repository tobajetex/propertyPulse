import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'PropertyPulse || Property for your need',
  description:
    'this is a place of affordable property of your choice .property with Certificate of occupancy avaliable for purchase',
  keyword: 'rent, rental,property,duplex,bungalow',
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <div>{children}</div>
    </html>
  )
}

export default MainLayout

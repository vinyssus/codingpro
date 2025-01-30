import React from 'react'
import ContactFirst from '../../components/contact/contactFirst/ContactFirst.tsx'
import ContactBanner from '../../components/contact/contactBanner/ContactBanner.tsx'
import ContactSecond from '../../components/contact/contactSecond/ContactSecond.tsx'

const Contact = () => {
  return (
    <div>
      <ContactBanner />
     <ContactFirst />
     <ContactSecond />
    </div>
  )
}

export default Contact

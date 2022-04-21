import React, { useEffect } from 'react'
import ThemeLayout from '../../components_reuse/ThemeLayout'
import { Sidepanel } from '../../components_reuse/Sidepanel'
import Popup1 from '../../components_reuse/Popup1'
import Popup2 from '../../components_reuse/Popup2'
import Popup3 from '../../components_reuse/Popup3'
import Popup4 from '../../components_reuse/Popup4'

export default function Newsfeed({ user}) {
    return (
        <>
            <ThemeLayout/>
            <Sidepanel/>
            <Popup2/>
            <Popup3/>
            <Popup1/>
            <Popup4/>
        </>

    )
}

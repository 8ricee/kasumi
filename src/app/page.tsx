import { Background } from '@/components/layout/root/background'
import { ButtonRoot } from '@/components/layout/root/button-root'
import { DialogSubscribe } from '@/components/layout/root/dialog-subscribe'
import { Hero } from '@/components/layout/root/hero'
import { IconSocial } from '@/components/layout/root/icon-social'
import React from 'react'

function Root() {
    return (
        <Background>
            <DialogSubscribe />
            <Hero />
            <IconSocial />
            <ButtonRoot />
        </Background>
    )
}

export default Root
'use client'

import { useState } from 'react'
import { Button } from './Button'
import { API } from '@/utils/api'

enum STATE {
  initial,
  pressedOnce,
  confirmed,
}

export const ClearButton = () => {
  const [state, setState] = useState<STATE>(STATE.initial)

  return (
    <Button
      onClick={async () => {
        switch (state) {
          case STATE.initial:
            setState(STATE.pressedOnce)
            return
          case STATE.pressedOnce:
            setState(STATE.confirmed)
            await API.clearAllItems()
            setTimeout(() => {
              setState(STATE.initial)
            }, 3000)
            setTimeout(() => {
              window.location.reload()
            }, 1000)
            return
        }
      }}
    >
      {state === STATE.initial && 'Clear all'}
      {state === STATE.pressedOnce && 'Are you sure? Press again to confirm'}
      {state === STATE.confirmed && 'Confirmed! Clearing all items..'}
    </Button>
  )
}

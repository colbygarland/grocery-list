'use client'

import { Checkbox } from '@/components/Checkbox'

export const List = ({
  items,
  strikethrough,
  checked,
}: {
  items: any[]
  strikethrough?: boolean
  checked?: boolean
}) => {
  return (
    <ul>
      <li>
        <Checkbox
          label="Get new vehicle and house insurance"
          id="get_new_vehicle_and_house_insurance"
          strikethrough={strikethrough}
          checked={checked}
          onChange={() => {}}
        />
      </li>
      <li>
        <Checkbox
          label="Finish planning New Zealand"
          id="finish_planning_new_zealand"
          strikethrough={strikethrough}
          checked={checked}
          onChange={() => {}}
        />
      </li>
    </ul>
  )
}

'use client'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { InputField } from '@/components/InputField'
import { PageContainer } from '@/components/PageContainer'
import { H1 } from '@/components/Typography'
import { API, GroceryItem } from '@/utils/api'
import { useState } from 'react'

export default function Add() {
  const [item, setItem] = useState<GroceryItem>({
    name: '',
    state: false,
    section: 'costco',
    id: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(async () => {
      await API.createItem(item)
      setSubmitting(false)
      setShowToast(true)
      setItem({
        id: '',
        name: '',
        state: false,
        section: 'costco',
      })
      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }, 1000)
  }

  return (
    <PageContainer>
      <H1>Add Items</H1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          id="name"
          placeholder="Enter item"
          value={item.name}
          onChange={(e: any) => {
            const val = e.target.value
            setItem({
              ...item,
              id: val.toLowerCase().trim().replaceAll(' ', '_'),
              [e.target.name]: val,
            })
          }}
        />
        <Checkbox
          label="Non-Costco?"
          id="costco_section"
          checked={item.section === 'non_costco'}
          onChange={(e: any) => {
            setItem({
              ...item,
              section: e.target.checked ? 'non_costco' : 'costco',
            })
          }}
        />

        <Button type="submit" disabled={submitting}>
          {submitting ? 'Creating item...' : '+ Add Item'}
        </Button>
      </form>
      {showToast && (
        <div className="fixed right-4 top-4 bg-green-600 text-white py-4 px-8 rounded-lg shadow-lg">
          <strong>Item added! 🎉</strong>
        </div>
      )}
    </PageContainer>
  )
}

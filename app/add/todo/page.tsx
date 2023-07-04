'use client'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { InputField } from '@/components/InputField'
import { PageContainer } from '@/components/PageContainer'
import { H1 } from '@/components/Typography'
import { API } from '@/utils/api'
import { useState } from 'react'

export default function Add() {
  const [todo, setTodo] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(async () => {
      //await API.createItem(item)
      setSubmitting(false)
      setShowToast(true)

      setTimeout(() => {
        setShowToast(false)
      }, 3000)
    }, 1000)
  }

  return (
    <PageContainer>
      <H1>Add To Do</H1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="To Do"
          id="todo"
          placeholder="Enter to do item"
          value={todo}
          onChange={(e: any) => {
            setTodo(e.target.value)
          }}
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Creating to do...' : '+ Add To Do'}
        </Button>
      </form>
      {showToast && (
        <div className="fixed right-4 top-4 bg-green-600 text-white py-4 px-8 rounded-lg shadow-lg">
          <strong>To Do added! 🎉</strong>
        </div>
      )}
    </PageContainer>
  )
}

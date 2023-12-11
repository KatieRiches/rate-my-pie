import React from 'react'
import { Shop } from '../models/rate'

interface Props {
  shop: Shop[]
}

function ShopRate({ shop }: Props) {
  const handleAddRatingClick = () => {
    window.location.href = '/rating-form'
  }
  return (
    <section>
      <h3>Name:</h3>
      <p>Pietopia</p>
      <h3>Specialty:</h3>
      <p>Butterchicken</p>
      <h3>Overall Rating:</h3>
      <p>🥧 🥧 🥧 🥧 🥧</p>

      <button onClick={handleAddRatingClick}>Add A Rating</button>
    </section>
  )
}

export default ShopRate

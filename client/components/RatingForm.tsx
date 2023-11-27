import React, { useState } from 'react'
import Rate from './Rate'
import { Rating } from '../models/rate'

interface Props {
  onAddRating: (newRating: Rating) => void
}

const initialState = {
  shopname: '',
  flavour: '',
  pastry: 0,
  meat: 0,
  gravy: 0,
  rating: 0,
  overallrating: 0,
  shopspecialty: '',
}

export function AddRating({ onAddRating }: Props) {
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onAddRating(form)
    setForm(initialState)
  }

  return (
    <>
      <div className="form">
        <h2>Rate a Pie 🥧</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="shopname" className="label">
            Shop Name:
          </label>
          <input
            type="text"
            name="shopname"
            id="shopname"
            value={form.shopname}
            onChange={handleChange}
          />
          <label htmlFor="flavour" className="label">
            Flavour:
          </label>
          <input
            type="text"
            name="flavour"
            id="flavour"
            value={form.flavour}
            onChange={handleChange}
          />
          <label htmlFor="flavour" className="label">
            Pastry:
          </label>
          <input
            type="number"
            name="pastry"
            id="pastry"
            value={form.pastry}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="flavour" className="label">
            Meat:
          </label>
          <input
            type="number"
            name="meat"
            id="meat"
            value={form.meat}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="flavour" className="label">
            Gravy:
          </label>
          <input
            type="number"
            name="gravy"
            id="gravy"
            value={form.gravy}
            onChange={handleChange}
          />
          <br></br>
          <label htmlFor="flavour" className="label">
            Rating:
          </label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={form.rating}
            onChange={handleChange}
          />
          <button type="submit" className="label">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

function RatingForm() {
  const [rate, setRate] = useState<Rating[]>([])

  function handleRating(newRate: Rating) {
    setRate([...rate, newRate])
  }
  return (
    <div>
      <AddRating onAddRating={handleRating} />
      <Rate rating={rate} />
    </div>
  )
}

export default RatingForm

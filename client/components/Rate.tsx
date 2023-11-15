// import type { Health } from '../../models/medical.ts'
import type { Rating } from '../models/rate.ts'

interface Props {
  rating: Rating[]
}

function Rate({ rating }: Props) {
  return (
    <section>
      <ul>
        {rating.map((a) => (
          <li key={a.id}>
            <h3>Name:</h3>
            <p>{a.name}</p>
            <h3>Flavour:</h3>
            <p>{a.flavour}</p>
            <h3>Pastry:</h3>
            <p>{a.pastry}</p>
            <h3>Meat:</h3>
            <p>{a.meat}</p>
            <h3>Gravy:</h3>
            <p>{a.gravy}</p>
            <h3>Rating:</h3>
            <p>{a.rating}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Rate

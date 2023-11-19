import { Shop } from '../models/rate'

interface Props {
  shop: Shop[]
}

function Rate({ shop }: Props) {
  return (
    <section>
      <ul>
        {shop.map((a) => (
          <li key={a.shopname}>
            <h3>Name:</h3>
            <p>{a.shopname}</p>
            <h3>Shops Rating:</h3>
            <p>{a.overallrating}</p>
            <h3>Shops Specialty:</h3>
            <p>{a.shopspecialty}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Rate

function FruitList({ items, renderItem, getKey }){
  return(
    <ul className="fruit-list">
      {items.map(item => (
      <li className="fruit-card" key={getKey(item)}>
        {renderItem(item)}
      </li>
      ))}
    </ul>
  )
}

export default FruitList

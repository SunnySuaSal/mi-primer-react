function FruitList({ items, renderItem, getKey }){
  return(
    <ul>
      {items.map(item => (
      <li key={getKey(item)}>
        {renderItem(item)}
      </li>
      ))}
    </ul>
  )
}

export default FruitList

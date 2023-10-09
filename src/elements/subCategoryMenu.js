const SubCategoryMenu = ({items}) => {
  console.log(items)
  return (
    <>
      {items.map((item) => {
        return <p key={item.key} className="menu-main-section-p">{item.text}</p>
      })}
    </>
  )
}

export default SubCategoryMenu
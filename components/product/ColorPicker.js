function ColorPicker({onChooseColor, color}) {
  const listColor = [
    {
      value: 'rgb(207, 201, 202)',
      name: 'Ash'
    },
    {
      value: 'rgb(252, 177, 41)',
      name: 'Gold'
    },
    {
      value: 'rgb(147, 170, 106)',
      name: 'Kiwi'
    },
    {
      value: 'rgb(159, 183, 204)',
      name: 'Light Blue'
    }
  ]

  function ColorItem({active, color}) {
    return (
      <div
        className={`w-10 h-10 rounded-full overflow-hidden border ${active ? 'border-primary' : 'border-transparent'} p-1 mr-1`}>
        <div className={`w-full h-full rounded-full cursor-pointer active:opacity-80`}
             style={{backgroundColor: color?.value}} onClick={() => onChooseColor(color)}>
        </div>
      </div>
    )
  }


  return (
    <div className="flex flex-col my-2">
      <div className="text-base font-semibold mb-1">Color: {color?.name}</div>
      <div className="flex">
        {listColor.map(c => <ColorItem active={color?.name === c.name} color={c}/>)}
      </div>
    </div>
  )
}

export default ColorPicker

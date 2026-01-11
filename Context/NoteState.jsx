import NoteContext from "./NoteContext";


const NoteState = (props) => {
   const check = "Working";
  return (
    <NoteContext.Provider value={{check}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
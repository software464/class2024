import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [state, setstate] = useState({
    color: "red",
    backgroundColor: "blue",
    fontFamily: "cursive"
  }

  )

  function handleInput(e) {
    console.log("handle input called", e.target, e.target.value)
    setstate({
      ...state,
      [e.target.name]: e.target.value

    })

  }



  return (
    <>

      <div style={{ color: state.color, backgroundColor: state.backgroundColor, fontFamily: state.fontFamily }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis, illo officia ex illum ad libero repellendus velit nisi porro cupiditate? Veritatis dignissimos sunt quo rem neque tenetur, facere reiciendis! Expedita, harum! Ipsa, sint. Dolorem doloribus dolor fugit placeat quisquam hic sapiente quis quam dolorum in maxime nam dignissimos amet corrupti officia sint adipisci, rem cupiditate perspiciatis reprehenderit ab totam. Velit eius officiis accusantium at harum modi aliquid animi ducimus minus inventore. Qui dolor facilis necessitatibus provident a quas officiis minus consectetur veritatis veniam aut nulla autem eaque quaerat eum recusandae, hic iste corrupti rem. Eos, deserunt dolor laudantium error atque, fugiat sint magni nostrum officiis quaerat cum? Perspiciatis doloribus laboriosam quaerat, odio, omnis alias necessitatibus suscipit dolor atque dolore dignissimos sunt ipsam reprehenderit aperiam consequuntur, dolorum maiores nihil quasi ullam quia! Totam impedit eum placeat quasi ullam excepturi voluptates ea dolore ex? Officiis placeat commodi illum hic vero ipsam accusamus voluptatibus aperiam dicta error? Vitae dolore praesentium minima, rerum corporis impedit nemo repellendus eligendi ipsa voluptate. Cum, dolorum dignissimos laboriosam earum, hic recusandae ipsa porro eaque, reiciendis quas iure sit accusantium omnis. Tempora doloribus natus odit blanditiis hic, eum debitis veritatis suscipit corporis itaque dolores reprehenderit beatae, aut nulla eos officiis quas optio, autem odio? Voluptatum nesciunt illo corporis nobis minus, deleniti ex. Voluptatum maxime, necessitatibus, dicta qui facere quae itaque ea, iure minus accusamus eaque! Unde cupiditate, quos ipsam velit officia, minima eveniet error atque dolorum est aspernatur sequi similique nulla consequatur, tempora quis voluptas quod dolore! Doloribus, nulla! Sint, quaerat possimus accusantium voluptatum fugiat maxime temporibus minima amet beatae enim impedit quo reprehenderit culpa harum ratione sunt libero distinctio commodi et, nihil delectus. Ea voluptas impedit id eaque quod numquam dolor libero distinctio optio quasi, dolores, modi sunt, ipsum aut nulla iusto est deserunt odit suscipit totam?</div>

      color: <input type="color" name="color" value={state.color} onChange={handleInput} />
      background: <input type="color" name="backgroundColor" id="" value={state.backgroundColor} onChange={handleInput} />
      <select name="fontFamily" onChange={handleInput}
      >
        <option name="fontFamily" onChange={handleInput}>sans-serif</option>
        <option name="fontFamily"  onChange={handleInput}>serif</option>
        <option name="fontFamily"  onChange={handleInput}>cursive</option>
      </select>
    </>
  )
}

export default App

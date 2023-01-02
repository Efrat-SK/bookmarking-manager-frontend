import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/App.css'
import Form from './Form'
import BmItem from './Bm-Item'

const App = () => {
  const [bmText, setBmText] = useState('')
  const [bmTitle, setBmTitle] = useState('')
  const [listBms, setListBms] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/items')
        setListBms(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getItemsList()
  }, [])

  const addBm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5500/api/item', { itemText: bmText , itemTitle: bmTitle })
      setListBms(prev => [...prev, res.data])
      setBmText('')
      setBmTitle('')
      closeForm()
    } catch (err) {
      console.log(err)
    }
  }

  const deleteBm = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/item/${id}`)
      const newListBm = listBms.filter(bm => bm._id !== id)
      setListBms(newListBm)
    } catch (err) {
      console.log(err)
    }
  }

  const closeForm = () => {
    setShowForm(false)
  }

  return (
    <div className="App">
      <h1 >My Bookmark Manager</h1>
      {!showForm && <button className="add-URL-btn" onClick={() => setShowForm(true)}>Add new Bookmark</button>}
      {showForm && <Form
        addBm={addBm}
        bmText={bmText}
        setBmText={setBmText}
        bmTitle={bmTitle}
        setBmTitle={setBmTitle}
        setShowForm={setShowForm}
      />}
      <div className="bm-listItems">
        {
          listBms.map(bm =>
            <BmItem
              key={bm._id}
              bm={bm}
              deleteBm={deleteBm}
            />
          )
        }
      </div>
    </div>
  )
}

export default App

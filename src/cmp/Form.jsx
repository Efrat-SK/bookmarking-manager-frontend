import '../css/App.css'

const Form = ({ addBm, bmText, setBmText, bmTitle, setBmTitle}) => {   

    return (
        <div className="form-container">
            <form className="form" onSubmit={e => addBm(e)}>
                <div className="inputs-container">
                    <input type="text" placeholder="Add new URL" onChange={e => { setBmText(e.target.value) }} value={bmText} />
                    <input type="text" placeholder="Add title" onChange={e => { setBmTitle(e.target.value) }} value={bmTitle} />
                </div>
                <button type="submit">Add</button>
        </form>
        </div >
    )
}

export default Form
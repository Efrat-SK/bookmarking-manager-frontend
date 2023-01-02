import '../css/App.css'

const BmItem = ({ bm, deleteBm }) => {
    return (
        <div className="bm-Item">
            <a className="bm-content ellipsis" href={bm.itemText} target="_blank" rel="noreferrer">
            <img src={`https://www.google.com/s2/favicons?domain=${bm.itemText}&sz=${16}`} alt="favicon" width="16" height="16"></img>
                {bm.itemTitle}
            </a>
            <button className="delete-bm" onClick={() => { deleteBm(bm._id) }}>X</button>
        </div>
    )
}

export default BmItem
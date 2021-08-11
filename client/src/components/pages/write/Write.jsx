import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img
            className="writeImg" 
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" 
            alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Tell your story..." 
                    type="text" 
                    className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

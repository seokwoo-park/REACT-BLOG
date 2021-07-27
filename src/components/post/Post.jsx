import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://www.traveldailymedia.com/assets/2018/11/tokyo-street-crossing.jpg" 
                alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Travel</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer porttitor vestibulum dolor, ac commodo magna consectetur at. 
            Donec felis odio, ornare ut porttitor id, interdum et erat.
            Mauris pellentesque fringilla augue, ut sagittis neque faucibus id.
            Nullam eget mauris eu sem vehicula tincidunt. 
            Nullam eleifend tincidunt ultrices. 
            Maecenas dapibus et nibh at suscipit. Fusce auctor tellus purus. 
            Phasellus sit amet porttitor nisi.
            </p>
        </div>
    )
}

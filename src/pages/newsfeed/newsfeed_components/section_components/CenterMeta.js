import Postbox from "./center_components/Postbox"
import SuggestFr from "./center_components/SuggestFr"
import Loadmore from "./center_components/Loadmore"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react"

export default function CenterMeta() {

    const user = JSON.parse(localStorage.getItem('user'))
    
    const [posts, setPosts] = useState([])

    console.log('danh sach post', posts);

    const createPost = (text, photos) => {
       
        console.log('photos', photos[0]);
        const dataArray = new FormData()
        dataArray.append("userId", user.userId)
        dataArray.append("text", text)
        dataArray.append("PhotoFile", photos[0])

        console.log(dataArray);

        axios.post('https://localhost:7284/api/post/createpost', dataArray,{
            headers: {
                "Content-Type": "multipart/form-data"
              }
        }).then((res) =>{
            const newPost = res.data.data
            console.log('newPost', newPost);
            setPosts([newPost, ...posts])
            
        })
        window.location.reload();
    }


    const importJs = () => {
        const script = document.createElement("script");
        script.src = "js/main.min.js";
        script.async = false;
        script.onload = () => this.scriptLoaded();
        document.body.appendChild(script);
        
        const script1 = document.createElement("script");
        script1.src = "js/jquery-stories.js";
        script1.async = false;
        script1.onload = () => this.scriptLoaded();
        document.body.appendChild(script1);
        
        const script2 = document.createElement("script");
        script2.src = "../../../cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js";
        script2.async = false;
        script2.onload = () => this.scriptLoaded();
        document.body.appendChild(script2);

        const script5 = document.createElement("script");
        script5.src = "js/map-init.js";
        script5.async = false;
        script5.onload = () => this.scriptLoaded();
        document.body.appendChild(script5);

        const script3 = document.createElement("script");
        script3.src = "js/script.js";
        script3.async = false;
        script3.onload = () => this.scriptLoaded();
        document.body.appendChild(script3);

        const script4 = document.createElement("script");
        script4.src = "js/us3locpicker.js";
        script4.async = false;
        script4.onload = () => this.scriptLoaded();
        document.body.appendChild(script4);
    } 

    const getNews = (user) => {
        axios.get('https://localhost:7284/api/post/getnews?userid='+user.userId)
                .then((res) => {
                    const posts = res.data.data
                    console.log('Newfeed của user', posts)
                    setPosts(posts)
                })
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        getNews(user)
        importJs()
    },[])

    // useEffect(()=>{
    //     importJs();
    // },[])

    return (
        <div className="col-lg-6">
            <Postbox createPost={createPost} user={user} />
            <SuggestFr/>
            <Loadmore posts={posts} />
        </div>
    )
}
import {home} from './home/index.js'
import {about} from './about/index.js'

export default () => {
    let url = location.href.replace("http://127.0.0.1:5500", "");
    console.log("url", url)
    
    if(url == "/") {
        return home
    }

    if(url.includes("/about")) {
        return about
    }

    return "Page not found"
}
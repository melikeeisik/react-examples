import axios from "axios";
async function getData(userId){
    try{
        const { data : user} =await axios (
            "https://jsonplaceholder.typicode.com/users/"+userId
        );
        const {data : post } = await axios(
            "https://jsonplaceholder.typicode.com/posts?userId=" +userId
        );
        return { user, post };
    }catch(e){
        console.log(e)
    }
}

export { getData}
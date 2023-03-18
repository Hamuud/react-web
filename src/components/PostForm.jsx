import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/Button's/button/MyButton";
import MyInputPost from "./UI/MyInputPost/MyInputPost";


const PostForm = ({create}) => {
    const[post, setPost] = useState({title: '', body: ''})

    function RandArray(array){
        const rand = Math.random()*array.length | 0;
        const rValue = array[rand];
        return rValue;
    }
    const myArray = ['Марія', 'Оксана', 'Надія', 'Настя', 'Віра', 'Ксеня',];
    const surnameArray = ['Лясковець', 'Семенюк', 'Гончарова', 'Воробей', 'Чудік', 'Рудь'];
    const monthArray = [
        '01', '02', '03', '04',
        '05', '06','07','08',
        '09', '10', '11', '12'];
    const dayArray =    [
        '01', '02', '03', '04',
        '05', '06','07','08',
        '09', '10', '11', '12',
        '13', '14', '15', '16',
        '17', '18','19','20',
        '21', '22', '23', '24',
        '25', '26', '27', '28'];
    const yearArray = [
        '85', '86', '87', '88',
        '89', '90','91','92',
        '96', '95', '94', '93',
        '97', '98', '99'];
    const rValue = RandArray(myArray);
    const surname = RandArray(surnameArray);
    const month = RandArray(monthArray);
    const day = RandArray(dayArray);
    const year = RandArray(yearArray);
   // let rand = rValue + surname + month + day + "19" + year;

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
         ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInputPost
                value = {post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type= "text"
                placeholder= "Phone Number"
            />
            <MyInputPost
                value = {post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type= "text"
                placeholder= "Description"
            />
            <MyButton style={{float: "right"}} onClick = {addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;
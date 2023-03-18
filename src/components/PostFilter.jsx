import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>

            <MyInput
                value = {filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value})}
                placeholder = "Search..."
            />
            <hr style = {{margin: '10px 0'}}/>
            <MySelect
                value = {filter.query}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue = "Sort"
                options = {[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'},
                ]}
            />
        </div>
    );
};

export default PostFilter;
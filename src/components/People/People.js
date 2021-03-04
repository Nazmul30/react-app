import React from 'react';

const People = (props) => {
    const {name,Salary,image}=props.people;
    const style1={border: '2px solid black',margin:'10px',padding:'10px'}
    const imageStyle={height:'50px'}
    const handleAddpeople=props.handleAddpeople;
    
    return (
        <div style={style1}>
            <h4>this is name {name}</h4>
            <img style={imageStyle} src={image} alt=""/>
            <h4>Salary {Salary}</h4>
            
            <button onClick={()=>handleAddpeople(props.people)}>Add me</button>
        </div>
    );
};

export default People;
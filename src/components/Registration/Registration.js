import React from 'react';


    const Registration = e => {
       console.log('regs completed hoiche');
        

    return (
        <div>
            <form onSubmit ={Registration}>
            <h1>Registration HERE</h1>
            <label htmlFor="email"> Email:</label>
            <input type="text" name="email"/>
            <br/>
            <label htmlFor="password"> password:</label>
            <input type="text" name="email"/>
            <br/>
            <input type="submit" value="Registration"/>
            </form>
        
        </div>
    );
    
};


export default Registration;
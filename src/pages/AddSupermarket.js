import '../style/generalstyle.css';
const AddSuperMarket = () => {
    return (
        <>
            <h1>Add supermarket</h1>
            <form>
                <label>
                    Supermarket Name:
                    <input 
                        type="text" 
                        required 
                    />
                </label>
                <button className='add-or-delete-button' type="submit">Add Supermarket</button>
            </form>
        </>
    );
};

export default AddSuperMarket;

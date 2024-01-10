export default function ButtonClick({handleCount}){
    return (
        <div className="button-container">
    <button onClick = {handleCount}>Incrrease 1(+1)</button>
    </div>
    );
}
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = (props) => {    

    let propsP = props.products
    // console.log(propsP);           
    return (
        <div>
            <hr />
            <h1>-Our Courses-</h1>
            <hr />
            <div>
               {
                propsP.map(product => <h4>{product.title} <hr /></h4>)
               }
                
            
            </div>

            
        </div>
    );
};

export default Sidebar;